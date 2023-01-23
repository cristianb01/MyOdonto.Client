import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ClinicHistoryPageComponent } from './clinic-history-page/clinic-history-page.component';
import { ClinicHistoryHeaderComponent } from './clinic-history-header/clinic-history-header.component';
import { ClinicHistoryPatientSectionComponent } from './clinic-history-patient-section/clinic-history-patient-section.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ClinicHistoryContainerComponent } from './clinic-history-container/clinic-history-container.component';



@NgModule({
  declarations: [
    ClinicHistoryPageComponent,
    ClinicHistoryHeaderComponent,
    ClinicHistoryPatientSectionComponent,
    ClinicHistoryContainerComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
  ]
})
export class ClinicHistoryModule { }
