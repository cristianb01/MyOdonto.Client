import { Component, EventEmitter, Output } from '@angular/core';
import { Form, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Patient } from 'src/app/models/patient.model';

@Component({
  selector: 'app-clinic-history-patient-section',
  templateUrl: './clinic-history-patient-section.component.html',
  styleUrls: ['./clinic-history-patient-section.component.scss']
})
export class ClinicHistoryPatientSectionComponent {

  @Output() patientEvent = new EventEmitter<Patient>();

  public patientForm: FormGroup;

  public genderValues: string[] = ['male', 'female', 'other',]; // TODO: get this data from API
  public maritalStatuses: string[] = ['single', 'divorced', 'married', 'other',]; // TODO: get this data from API

  constructor(private formbuilder: FormBuilder) {
    this.patientForm = this.createPatientForm();
  }

  private createPatientForm(): FormGroup {
    return this.formbuilder.group({
      name: ['', [Validators.required, Validators.maxLength(100)]],
      address: ['', [Validators.required, Validators.maxLength(100)]],
      healthProviderEntity: ['', [Validators.required, Validators.maxLength(100)]],
      occupation: ['', Validators.required, Validators.maxLength(100)],
      scolarship: ['', Validators.required, Validators.maxLength(100)],
      birthDate: [null, Validators.required],
      gender: [this.genderValues[0], Validators.required],
      maritalStatus: [null, Validators.required]
    });
  }

  public submitForm(): void {
    this.patientForm.markAllAsTouched();
    if (this.patientForm.valid) {
      let patient = this.mapFormToPatientModel();
      this.patientEvent.emit(patient);
    }
  }

  private mapFormToPatientModel(): Patient {
    let output: Patient = {
      name: this.patientForm.controls['name'].value,
      address: this.patientForm.controls['address'].value,
      healthProviderEntity: this.patientForm.controls['healthProviderEntity'].value,
      occupation: this.patientForm.controls['occupation'].value,
      scolarship: this.patientForm.controls['scolarship'].value,
      birthDate: this.patientForm.controls['birthDate'].value,
      gender: this.patientForm.controls['gender'].value,
      maritalStatus: this.patientForm.controls['maritalStatus'].value
    }

    return output;
  }
}
