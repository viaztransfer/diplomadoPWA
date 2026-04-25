import { Injectable } from '@angular/core';
import PocketBase from 'pocketbase';
import { BehaviorSubject } from 'rxjs';
import { Course } from '../models/course.model';

@Injectable({
  providedIn: 'root'
})
export class CoursesService {
  private pb = new PocketBase('https://db.via-z.com:8090');

  private coursesSubject = new BehaviorSubject<Course[]>([]);
  courses$ = this.coursesSubject.asObservable();

  private readonly collection = 'courses';

  async loadCourses(): Promise<void> {
    const records = await this.pb.collection(this.collection).getFullList<Course>({
      sort: 'order,title'
    });

    this.coursesSubject.next(records);
  }

  async createCourse(data: FormData): Promise<Course> {
    const record = await this.pb.collection(this.collection).create<Course>(data);
    await this.loadCourses();
    return record;
  }

  async updateCourse(id: string, data: FormData): Promise<Course> {
    const record = await this.pb.collection(this.collection).update<Course>(id, data);
    await this.loadCourses();
    return record;
  }

  async deleteCourse(id: string): Promise<void> {
    await this.pb.collection(this.collection).delete(id);
    await this.loadCourses();
  }

  getImageUrl(course: Course): string {
    if (!course.image) {
      return 'assets/images/page2/event/event_001.webp';
    }

    return this.pb.files.getUrl(course as any, course.image);
  }
}