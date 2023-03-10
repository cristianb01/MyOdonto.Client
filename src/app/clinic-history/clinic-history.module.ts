import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AutocompleteLibModule } from 'angular-ng-autocomplete';
import { ClinicHistoryContainerComponent } from './clinic-history-container/clinic-history-container.component';
import { ClinicHistoryHeaderComponent } from './clinic-history-header/clinic-history-header.component';
import { ClinicHistoryPageComponent } from './clinic-history-page/clinic-history-page.component';
import { ClinicHistoryPatientSectionComponent } from './clinic-history-patient-section/clinic-history-patient-section.component';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatDatepickerModule} from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import {MatSelectModule} from '@angular/material/select';
import { MatInputModule } from '@angular/material/input';
import { PathologicalPersonalBackgroundComponent } from './pathological-personal-background/pathological-personal-background.component';
import {MatCheckboxModule} from '@angular/material/checkbox';
import {MatButtonModule} from '@angular/material/button';
import { FamilyBackgroundComponent } from './family-background/family-background.component';
import { AppCommonModule } from '../app-common/app-common.module';
import {MatTableModule} from '@angular/material/table';
import { NonPathologicalPersonalBackgroundComponent } from './non-pathological-personal-background/non-pathological-personal-background.component';
import { CurrentConditionsComponent as CurrentConditionsComponent } from './current-conditions/current-conditions.component';
import { FacialAnalysisComponent } from './facial-analysis/facial-analysis.component';
import {MatRadioModule} from '@angular/material/radio';
import { BaseClinicHistorySectionComponent } from './base-clinic-history-section/base-clinic-history-section.component';
import { FunctionalAnalysisComponent } from './functional-analysis/functional-analysis.component';
import { OdontogramModule } from '../odontogram/odontogram.module';
import { RouterModule } from '@angular/router';
import { MatSnackBarModule } from '@angular/material/snack-bar';

@NgModule({
  declarations: [
    ClinicHistoryPageComponent,
    ClinicHistoryHeaderComponent,
    ClinicHistoryPatientSectionComponent,
    ClinicHistoryContainerComponent,
    PathologicalPersonalBackgroundComponent,
    FamilyBackgroundComponent,
    NonPathologicalPersonalBackgroundComponent,
    CurrentConditionsComponent,
    FacialAnalysisComponent,
    BaseClinicHistorySectionComponent as unknown as any[],
    FunctionalAnalysisComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    AutocompleteLibModule,
    MatFormFieldModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatSelectModule,
    MatInputModule,
    MatCheckboxModule,
    MatFormFieldModule,
    MatButtonModule,
    AppCommonModule,
    MatTableModule,
    MatRadioModule,
    OdontogramModule,
    RouterModule,
    MatSnackBarModule
  ],
  exports: [MatFormFieldModule]
})
export class ClinicHistoryModule { }
