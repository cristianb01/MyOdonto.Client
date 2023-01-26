import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AutocompleteLibModule } from 'angular-ng-autocomplete';
import { CheckForExistingPatientComponent } from './check-for-existing-patient/check-for-existing-patient.component';
import { ClinicHistoryContainerComponent } from './clinic-history-container/clinic-history-container.component';
import { ClinicHistoryHeaderComponent } from './clinic-history-header/clinic-history-header.component';
import { ClinicHistoryPageComponent } from './clinic-history-page/clinic-history-page.component';
import { ClinicHistoryPatientSectionComponent } from './clinic-history-patient-section/clinic-history-patient-section.component';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatDatepickerModule} from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import {MatSelectModule} from '@angular/material/select';
import { MatInputModule } from '@angular/material/input'

@NgModule({
  declarations: [
    ClinicHistoryPageComponent,
    ClinicHistoryHeaderComponent,
    ClinicHistoryPatientSectionComponent,
    ClinicHistoryContainerComponent,
    CheckForExistingPatientComponent,
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
    MatInputModule 
  ]
})
export class ClinicHistoryModule { }
