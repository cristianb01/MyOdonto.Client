import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Patient } from 'src/app/models/patient.model';

@Component({
  selector: 'app-clinic-history-container',
  templateUrl: './clinic-history-container.component.html',
  styleUrls: ['./clinic-history-container.component.scss']
})
export class ClinicHistoryContainerComponent {
  
  public patientForm: FormGroup;

  private forms: FormGroup;

  public genderValues: string[] = ['male', 'female', 'other',]; // TODO: get this data from API
  public maritalStatuses: string[] = ['single', 'divorced', 'married', 'other',]; // TODO: get this data from API

  constructor(private formbuilder: FormBuilder) {
    this.patientForm = this.createPatientForm();
    this.forms = this.createForms();

    this.forms.valueChanges.subscribe(data => console.log(this.forms));
  }

  private createForms(): FormGroup {
    return this.formbuilder.group({
      forms: this.formbuilder.array([
        this.patientForm,
      ])
    });
  }

  private createPatientForm(): FormGroup {
    return this.formbuilder.group({
      name: ['', [Validators.required, Validators.maxLength(100)]],
      address: ['', [Validators.required, Validators.maxLength(100)]],
      healthProviderEntity: ['', [Validators.required, Validators.maxLength(100)]],
      occupation: ['', [Validators.required, Validators.maxLength(100)]],
      scolarship: ['', [Validators.required, Validators.maxLength(100)]],
      birthDate: [null, Validators.required],
      gender: [this.genderValues[0], Validators.required],
      maritalStatus: [null, Validators.required]
    });
  }

  public submit(): void {
    if (this.forms.valid) {
      let patient = this.mapFormToPatientModel();
      console.log(patient);
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
