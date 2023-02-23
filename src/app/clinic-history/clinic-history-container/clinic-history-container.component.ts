import { Component, ElementRef, ViewChild } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { debounceTime } from 'rxjs';
import { SectionNames } from 'src/app/const/sections-names';
import { ClinicHistoryRequestModel, ClinicHistoryResponseModel } from 'src/app/models/clinic-history.model';
import { PathologicalPersonalBackground } from 'src/app/models/pathological-personal-background.model';
import { PatientRequestModel, PatientResponseModel } from 'src/app/models/patient.model';
import { ClinicHistoryService } from 'src/app/services/clinic-history.service';
import { PatientsService as PatientService } from 'src/app/services/patients.service';
import { ClinicHistoryPatientSectionComponent } from '../clinic-history-patient-section/clinic-history-patient-section.component';
import { CurrentConditionsComponent } from '../current-conditions/current-conditions.component';
import { FacialAnalysisComponent } from '../facial-analysis/facial-analysis.component';
import { FamilyBackgroundComponent } from '../family-background/family-background.component';
import { NonPathologicalPersonalBackgroundComponent } from '../non-pathological-personal-background/non-pathological-personal-background.component';
import { PathologicalPersonalBackgroundComponent } from '../pathological-personal-background/pathological-personal-background.component';

@Component({
  selector: 'app-clinic-history-container',
  templateUrl: './clinic-history-container.component.html',
  styleUrls: ['./clinic-history-container.component.scss']
})
export class ClinicHistoryContainerComponent {
  
  @ViewChild('pathologicalPersonalBackgroundForm') pathologicalPersonalBackgroundForm!: PathologicalPersonalBackgroundComponent;
  @ViewChild('patientForm') patientForm!: ClinicHistoryPatientSectionComponent;
  @ViewChild('familyBackground') familyBackgroundForm!: FamilyBackgroundComponent;
  @ViewChild('nonPathologicalPersonalBackgroundForm') nonPathologicalPersonalBackgroundForm!: NonPathologicalPersonalBackgroundComponent;
  @ViewChild('currentConditionsForm') currentConditionsForm!: CurrentConditionsComponent;
  @ViewChild('facialAnalysisForm') facialAnalysisForm!: FacialAnalysisComponent;

  public clinicHistory: ClinicHistoryRequestModel = new ClinicHistoryRequestModel();

  public loadedPatient!: PatientResponseModel;

  public readonly SectionNames = SectionNames;

  constructor(private clinicHistoryService: ClinicHistoryService) {
  }
  
  private postClinicHistory(): Promise<ClinicHistoryResponseModel> {
    return this.clinicHistoryService.postClinicHistory(this.clinicHistory);
  }

  public submit(): void {
    if (
      this.pathologicalPersonalBackgroundForm.submit() 
      && this.patientForm.submit()
      && this.familyBackgroundForm.submit()
      && this.nonPathologicalPersonalBackgroundForm.submit()
      && this.currentConditionsForm.submit()
      && this.facialAnalysisForm.submit()
    ) {
      this.clinicHistory.creationDate = new Date(),
      this.clinicHistory.doctorId = 1, // TODO: remove
      this.clinicHistory.expedient = "123123"; // TODO: remove
      this.postClinicHistory();
    }
    else {
      // TODO: alert of validation errors
    }
  }

  public onFormSubmit($event: any, sectionName: string) {
    if (sectionName === SectionNames.patient && typeof($event) === 'number') {
      this.clinicHistory.patientId = $event;
    }
    else {
      if (sectionName === SectionNames.familyBackgrounds) {
        this.clinicHistory.familyBackgroundObservations = $event.observations;
        $event = $event.familyBackgrounds;
      }
      if (sectionName === SectionNames.currentConditions) {
        this.clinicHistory.currentConditionsObservations = $event.observations
        $event = $event.currentConditions
      }
      if (sectionName === SectionNames.facialAnalysis) {
        this.clinicHistory.facialAnalysisObservations = $event.observations;
      }
      (this.clinicHistory)[sectionName as keyof ClinicHistoryRequestModel] = $event;
    }
  }
}
