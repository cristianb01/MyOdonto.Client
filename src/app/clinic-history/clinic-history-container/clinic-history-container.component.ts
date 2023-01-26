import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { debounceTime } from 'rxjs';
import { ClinicHistoryRequestModel, ClinicHistoryResponseModel } from 'src/app/models/clinic-history.model';
import { PatientRequestModel, PatientResponseModel } from 'src/app/models/patient.model';
import { ClinicHistoryService } from 'src/app/services/clinic-history.service';
import { PatientsService as PatientService } from 'src/app/services/patients.service';

@Component({
  selector: 'app-clinic-history-container',
  templateUrl: './clinic-history-container.component.html',
  styleUrls: ['./clinic-history-container.component.scss']
})
export class ClinicHistoryContainerComponent {
  
  public patientForm: FormGroup;

  private forms: FormGroup;

  public genderValues: {description: string, id: number }[] = 
    [{description: 'male', id: 1}, {description: 'female', id: 2 }, { description: 'other', id: 3 },]; // TODO: get this data from API
  public maritalStatuses: string[] = ['single', 'divorced', 'married', 'other',]; // TODO: get this data from API

  public loadedPatient!: PatientResponseModel;

  constructor(private formbuilder: FormBuilder, 
              private clinicHistoryService: ClinicHistoryService,
              private patientService: PatientService) {
    this.patientForm = this.createPatientForm();
    this.forms = this.createForms();
  }

  public onIdentificationInputBlur() {
    const identification = this.patientForm.controls['identification'].value;
    if (identification) {
      this.patientService.getPatient(identification)
        .then(patientResponse => {
          if(patientResponse) this.loadedPatient = patientResponse;
        });
    }
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

  private mapFormToPatientModel(): PatientRequestModel {
    let output: PatientRequestModel = {
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

  private createClinicHistoryModel(patient: PatientRequestModel): ClinicHistoryRequestModel {
    return {
      expedient: "23423",
      creationDate: new Date,
      doctorId: 1,
      patientId: 1,
      patient: patient
    } as ClinicHistoryRequestModel;
  }

  private postClinicHistory(clinicHistory: ClinicHistoryRequestModel): Promise<ClinicHistoryResponseModel> {
    return this.clinicHistoryService.postClinicHistory(clinicHistory);
  }
}
