import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClinicHistoryPatientSectionComponent } from './clinic-history-patient-section.component';

describe('ClinicHistoryPatientSectionComponent', () => {
  let component: ClinicHistoryPatientSectionComponent;
  let fixture: ComponentFixture<ClinicHistoryPatientSectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ClinicHistoryPatientSectionComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ClinicHistoryPatientSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
