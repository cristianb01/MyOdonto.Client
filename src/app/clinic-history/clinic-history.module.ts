import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ClinicHistoryPageComponent } from './clinic-history-page/clinic-history-page.component';
import { ClinicHistoryHeaderComponent } from './clinic-history-header/clinic-history-header.component';



@NgModule({
  declarations: [
    ClinicHistoryPageComponent,
    ClinicHistoryHeaderComponent
  ],
  imports: [
    CommonModule
  ]
})
export class ClinicHistoryModule { }
