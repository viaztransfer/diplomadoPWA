import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CursosDetails } from './cursos-details';

describe('CursosDetails', () => {
  let component: CursosDetails;
  let fixture: ComponentFixture<CursosDetails>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CursosDetails]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CursosDetails);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
