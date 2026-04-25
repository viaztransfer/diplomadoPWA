import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DiplomadoDetails } from './diplomado-details';

describe('DiplomadoDetails', () => {
  let component: DiplomadoDetails;
  let fixture: ComponentFixture<DiplomadoDetails>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DiplomadoDetails]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DiplomadoDetails);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
