import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ClinicHistoryRequestModel, ClinicHistoryResponseModel } from 'src/app/models/clinic-history.model';
import { Patient } from 'src/app/models/patient.model';
import { ClinicHistoryService } from 'src/app/services/clinic-history.service';

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

  constructor(private formbuilder: FormBuilder, private clinicHistoryService: ClinicHistoryService) {
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
      identification: ['', Validators.required],
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
      let clinicHistory = this.createClinicHistoryModel(patient);
      this.postClinicHistory(clinicHistory).then(response => console.log(response));
    }
  }

  private mapFormToPatientModel(): Patient {
    let output: Patient = {
      identification: this.patientForm.controls['identification'].value,
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

  private createClinicHistoryModel(patient: Patient): ClinicHistoryRequestModel {
    return {
      expedient: "23423",
      creationDate: new Date,
      doctorId: 1,
      patientId: 1,
      identification: "12312312", // TODO: Remove this field from entity
      patient: patient
    } as ClinicHistoryRequestModel;
  }

  private postClinicHistory(clinicHistory: ClinicHistoryRequestModel): Promise<ClinicHistoryResponseModel> {
    return this.clinicHistoryService.postClinicHistory(clinicHistory);
  }
}
