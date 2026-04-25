import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CoursesAdmin } from './courses-admin';

describe('CoursesAdmin', () => {
  let component: CoursesAdmin;
  let fixture: ComponentFixture<CoursesAdmin>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CoursesAdmin]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CoursesAdmin);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
