import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CheckForExistingPatientComponent } from './check-for-existing-patient.component';

describe('ClinicHistoryPathologicalBackgroundSectionComponent', () => {
  let component: CheckForExistingPatientComponent;
  let fixture: ComponentFixture<CheckForExistingPatientComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CheckForExistingPatientComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CheckForExistingPatientComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
