import { Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChange, SimpleChanges } from '@angular/core';
import { Form, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Selects } from 'src/app/const/selects';
import { PatientRequestModel, PatientResponseModel } from 'src/app/models/patient.model';
import { PatientsService as PatientService } from 'src/app/services/patients.service';


@Component({
  selector: 'app-clinic-history-patient-section',
  templateUrl: './clinic-history-patient-section.component.html',
  styleUrls: ['./clinic-history-patient-section.component.scss']
})
export class ClinicHistoryPatientSectionComponent implements OnChanges {

  @Input() patient!: PatientResponseModel;
  @Output() onFormSubmit = new EventEmitter<PatientRequestModel>();
  
  public patientForm: FormGroup;

  public readonly genders: { description: string, id: number }[];

  public readonly maritalStatuses: { description: string, id: number }[];

  constructor(private patientService: PatientService,
              private formbuilder: FormBuilder) {
    this.genders = Selects.Genders;
    this.maritalStatuses = Selects.MaritalStatuses;
    this.patientForm = this.createPatientForm();
  }
  
  ngOnChanges(changes: SimpleChanges): void {
    if (changes['patient'].currentValue) this.loadPatientToForm(changes['patient'].currentValue);
  }

  loadPatientToForm(patient: PatientResponseModel) {
    for(const property in patient) {
      if (this.patientForm.controls[property]) this.patientForm.controls[property].setValue(patient[property as keyof PatientResponseModel])
    }
  }

  public isControlInvalid(controlName: string): boolean {
    return this.patientForm.controls[controlName].touched && this.patientForm.controls[controlName].invalid;
  }

  public onIdentificationInputBlur() {
    const identification = this.patientForm.controls['identification'].value;
    if (identification) {
      this.patientService.getPatient(identification)
        .then(patientResponse => {
          if(patientResponse) this.loadPatientToForm(patientResponse);
        });
    }
  }

  private createPatientForm(): FormGroup {
    return this.formbuilder.group({
      id: [null],
      identification: ['', Validators.required],
      name: ['', [Validators.required, Validators.maxLength(100)]],
      address: ['', [Validators.required, Validators.maxLength(100)]],
      healthProviderEntity: ['', [Validators.required, Validators.maxLength(100)]],
      occupation: ['', [Validators.required, Validators.maxLength(100)]],
      scolarship: ['', [Validators.required, Validators.maxLength(100)]],
      birthDate: [null, Validators.required],
      gender: [null, Validators.required],
      maritalStatus: [null, Validators.required]
    });
  }

  
  private mapFormToPatientModel(): PatientRequestModel {
    // TODO: send only patientId when patient has been feeded
  
    let output: PatientRequestModel = {
      id: this.patientForm.controls['id'].value,
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

  public submit(): boolean {
    if (this.patientForm.valid) {
        let patient = this.mapFormToPatientModel();
        this.onFormSubmit.emit(patient);
        return true;
    }
    return false;
  }
}
