import { Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChange, SimpleChanges } from '@angular/core';
import { Form, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Selects } from 'src/app/const/selects';
import { PatientRequestModel, PatientResponseModel } from 'src/app/models/patient.model';

@Component({
  selector: 'app-clinic-history-patient-section',
  templateUrl: './clinic-history-patient-section.component.html',
  styleUrls: ['./clinic-history-patient-section.component.scss']
})
export class ClinicHistoryPatientSectionComponent implements OnChanges {

  @Input('form') patientForm!: FormGroup;

  @Input() patient!: PatientResponseModel;

  @Output() identificationInputBlur = new EventEmitter();

  public readonly genders: { description: string, id: number }[];
  public readonly maritalStatuses: { description: string, id: number }[];

  constructor() {
    this.genders = Selects.Genders;
    this.maritalStatuses = Selects.MaritalStatuses;
  }
  
  ngOnChanges(changes: SimpleChanges): void {
    if (changes['patient'].currentValue) this.loadPatientToForm(changes['patient'].currentValue);
  }

  loadPatientToForm(patient: PatientResponseModel) {
    for(const property in this.patient) {
      if (this.patientForm.controls[property]) this.patientForm.controls[property].setValue(patient[property as keyof PatientResponseModel])
    }
  }

  public isControlInvalid(controlName: string): boolean {
    return this.patientForm.controls[controlName].touched && this.patientForm.controls[controlName].invalid;
  }

  public onIdentificationInputBlur(): void {
    this.identificationInputBlur.emit();
  }
}
