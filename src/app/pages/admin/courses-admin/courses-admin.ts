import { CommonModule } from '@angular/common';
import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CoursesService } from '../../../services/courses.service';
import { Course } from '../../../models/course.model';

@Component({
  selector: 'app-courses-admin',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './courses-admin.html',
  styleUrl: './courses-admin.css'
})
export class CoursesAdmin implements OnInit {
  courses: Course[] = [];

  loading = false;
  saving = false;
  isEditing = false;

  selectedCourseId: string | null = null;
  selectedImage: File | null = null;
  previewImage: string | null = null;

  form = {
    title: '',
    slug: '',
    short_description: '',
    description: '',
    duration: '',
    modality: '',
    price: 0,
    category: '',
    is_featured: false,
    is_active: true,
    order: 1
  };

  constructor(
    public coursesService: CoursesService,
    private cdr: ChangeDetectorRef
  ) {}

  async ngOnInit(): Promise<void> {
    await this.loadData();

    this.coursesService.courses$.subscribe(courses => {
      this.courses = courses;
      this.cdr.detectChanges();
    });
  }

  async loadData(): Promise<void> {
    this.loading = true;

    try {
      await this.coursesService.loadCourses();
    } catch (error) {
      console.error('Error cargando cursos:', error);
    } finally {
      this.loading = false;
      this.cdr.detectChanges();
    }
  }

  generateSlug(): void {
    this.form.slug = this.form.title
      .toLowerCase()
      .normalize('NFD')
      .replace(/[\u0300-\u036f]/g, '')
      .replace(/[^a-z0-9]+/g, '-')
      .replace(/(^-|-$)+/g, '');
  }

  onImageSelected(event: Event): void {
    const input = event.target as HTMLInputElement;

    if (!input.files || input.files.length === 0) return;

    this.selectedImage = input.files[0];

    const reader = new FileReader();
    reader.onload = () => {
      this.previewImage = reader.result as string;
      this.cdr.detectChanges();
    };

    reader.readAsDataURL(this.selectedImage);
  }

  async saveCourse(): Promise<void> {
    if (this.saving) return;

    this.saving = true;
    this.cdr.detectChanges();

    try {
      const data = new FormData();

      data.append('title', this.form.title || '');
      data.append('slug', this.form.slug || '');
      data.append('short_description', this.form.short_description || '');
      data.append('description', this.form.description || '');
      data.append('duration', this.form.duration || '');
      data.append('modality', this.form.modality || '');
      data.append('price', String(this.form.price || 0));
      data.append('category', this.form.category || '');
      data.append('is_featured', String(this.form.is_featured));
      data.append('is_active', String(this.form.is_active));
      data.append('order', String(this.form.order || 1));

      if (this.selectedImage) {
        data.append('image', this.selectedImage);
      }

      if (this.isEditing && this.selectedCourseId) {
        await this.coursesService.updateCourse(this.selectedCourseId, data);
      } else {
        await this.coursesService.createCourse(data);
      }

      this.resetForm();
      await this.loadData();

    } catch (error) {
      console.error('Error guardando curso:', error);
      alert('El curso no pudo guardarse correctamente. Revisa la consola.');
    } finally {
      this.saving = false;
      this.cdr.detectChanges();
    }
  }

  editCourse(course: Course): void {
    this.isEditing = true;
    this.selectedCourseId = course.id;
    this.selectedImage = null;
    this.previewImage = this.coursesService.getImageUrl(course);

    this.form = {
      title: course.title || '',
      slug: course.slug || '',
      short_description: course.short_description || '',
      description: course.description || '',
      duration: course.duration || '',
      modality: course.modality || '',
      price: course.price || 0,
      category: course.category || '',
      is_featured: course.is_featured ?? false,
      is_active: course.is_active ?? true,
      order: course.order || 1
    };

    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

  async deleteCourse(course: Course): Promise<void> {
    const confirmDelete = confirm(`¿Eliminar el curso "${course.title}"?`);

    if (!confirmDelete) return;

    await this.coursesService.deleteCourse(course.id);
    await this.loadData();
  }

  resetForm(): void {
    this.isEditing = false;
    this.selectedCourseId = null;
    this.selectedImage = null;
    this.previewImage = null;

    this.form = {
      title: '',
      slug: '',
      short_description: '',
      description: '',
      duration: '',
      modality: '',
      price: 0,
      category: '',
      is_featured: false,
      is_active: true,
      order: 1
    };

    this.cdr.detectChanges();
  }
}