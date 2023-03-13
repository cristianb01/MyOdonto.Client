import { Component, ElementRef, TemplateRef, ViewChild } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { debounceTime } from 'rxjs';
import { FormValidationException } from 'src/app/app-common/exceptions/form-validation-exception';
import { SectionNames } from 'src/app/const/sections-names';
import { ClinicHistoryRequestModel, ClinicHistoryResponseModel } from 'src/app/models/clinic-history.model';
import { Doctor } from 'src/app/models/doctor.model';
import { mapLocalStorageOdontogramDataToModel, Odontogram } from 'src/app/models/odontogram.model';
import { PathologicalPersonalBackground } from 'src/app/models/pathological-personal-background.model';
import { PatientRequestModel, PatientResponseModel } from 'src/app/models/patient.model';
import { ClinicHistoryService } from 'src/app/services/clinic-history.service';
import { PatientsService as PatientService } from 'src/app/services/patients.service';
import { ClinicHistoryHeaderComponent } from '../clinic-history-header/clinic-history-header.component';
import { ClinicHistoryPatientSectionComponent } from '../clinic-history-patient-section/clinic-history-patient-section.component';
import { CurrentConditionsComponent } from '../current-conditions/current-conditions.component';
import { FacialAnalysisComponent } from '../facial-analysis/facial-analysis.component';
import { FamilyBackgroundComponent } from '../family-background/family-background.component';
import { FunctionalAnalysisComponent } from '../functional-analysis/functional-analysis.component';
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
  @ViewChild('functionalAnalysisForm') functionalAnalysisForm!: FunctionalAnalysisComponent;
  @ViewChild('headerForm') headerForm!: ClinicHistoryHeaderComponent;

  @ViewChild('snackBarTemplate') snackBarTemplate!: TemplateRef<any>;

  public doctor: Doctor = {
    id: 1,
    name: 'Doctor',
    surname: '1',
    professionalIndentification: '102381029858'
  } // TODO: Remove this

  public clinicHistory: ClinicHistoryRequestModel = new ClinicHistoryRequestModel();

  public loadedPatient!: PatientResponseModel;

  public readonly SectionNames = SectionNames;

  constructor(private clinicHistoryService: ClinicHistoryService,
              private snackbarService: MatSnackBar) {
  }
  
  private postClinicHistory(): Promise<ClinicHistoryResponseModel> {
    return this.clinicHistoryService.postClinicHistory(this.clinicHistory);
  }

  public submit(): void {
    try {
      this.headerForm.submit();
      this.pathologicalPersonalBackgroundForm.submit(); 
      this.patientForm.submit();
      this.familyBackgroundForm.submit();
      this.nonPathologicalPersonalBackgroundForm.submit();
      this.currentConditionsForm.submit();
      this.facialAnalysisForm.submit();
      this.functionalAnalysisForm.submit();
    }
    catch(e: any) {
      this.snackbarService.openFromTemplate(this.snackBarTemplate, {
        duration: 3000,
        horizontalPosition: 'right'
      });
      return;
    }
    this.clinicHistory.creationDate = new Date();
    this.clinicHistory.expedient ='123124203'; // TODO: Delete this
    this.clinicHistory.odontogram = this.mapOdontogramData();
    this.postClinicHistory().then();
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
        $event = $event.currentConditions;
      }
      if (sectionName === SectionNames.facialAnalysis) {
        this.clinicHistory.facialAnalysisObservations = $event.observations;
        $event = $event.facialAnalysisCharacteristics;
      }
      if (sectionName === SectionNames.functionalAnalysis) {
        this.clinicHistory.functionalAnalysisObservations = $event.observations;
        $event = $event.functionalAnalysisCharacteristics;
      }
      (this.clinicHistory)[sectionName as keyof ClinicHistoryRequestModel] = $event;
    }
    if (sectionName === SectionNames.header) {
      this.clinicHistory.doctorId = $event;
    }
  }

  private mapOdontogramData(): Odontogram {
    return mapLocalStorageOdontogramDataToModel();
  }

  public goToOdontogramPage(): void {
    window.open(`${window.location.toString()}/odontogram`, '_blank');
  }
}
