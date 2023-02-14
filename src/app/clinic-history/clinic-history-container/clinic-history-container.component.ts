import { Component, ElementRef, ViewChild } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { debounceTime } from 'rxjs';
import { ClinicHistoryRequestModel, ClinicHistoryResponseModel } from 'src/app/models/clinic-history.model';
import { PathologicalPersonalBackground } from 'src/app/models/pathological-personal-background.model';
import { PatientRequestModel, PatientResponseModel } from 'src/app/models/patient.model';
import { ClinicHistoryService } from 'src/app/services/clinic-history.service';
import { PatientsService as PatientService } from 'src/app/services/patients.service';
import { ClinicHistoryPatientSectionComponent } from '../clinic-history-patient-section/clinic-history-patient-section.component';
import { PathologicalPersonalBackgroundComponent } from '../pathological-personal-background/pathological-personal-background.component';

@Component({
  selector: 'app-clinic-history-container',
  templateUrl: './clinic-history-container.component.html',
  styleUrls: ['./clinic-history-container.component.scss']
})
export class ClinicHistoryContainerComponent {
  
  @ViewChild('pathologicalPersonalBackgroundForm') pathologicalPersonalBackgroundForm!: PathologicalPersonalBackgroundComponent;
  @ViewChild('patientForm') patientForm!: ClinicHistoryPatientSectionComponent;

  public clinicHistory: ClinicHistoryRequestModel = new ClinicHistoryRequestModel();

  public loadedPatient!: PatientResponseModel;

  constructor(private clinicHistoryService: ClinicHistoryService) {
  }
  
  private postClinicHistory(): Promise<ClinicHistoryResponseModel> {
    return this.clinicHistoryService.postClinicHistory(this.clinicHistory);
  }

  public submit(): void {
    if (
      this.pathologicalPersonalBackgroundForm.submit() 
      && this.patientForm.submit()
    ) {
      this.clinicHistory.creationDate = new Date(),
      this.clinicHistory.doctorId = 1, // TODO: remove
      this.clinicHistory.expedient = "123123"; // TODO: remove
      this.postClinicHistory();
    }
  }

  private isClinicHistoryModelWellConstructed(): boolean {
    for (const property in this.clinicHistory) {
      if (this.clinicHistory[property as keyof ClinicHistoryRequestModel] === null) return false;
    }
    return true;
  }

  public onFormSubmit($event: any, sectionName: string) {
    (this.clinicHistory)[sectionName as keyof ClinicHistoryRequestModel] = $event;
  }
}
