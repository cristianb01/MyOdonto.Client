import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ClinicHistoryPageComponent } from './clinic-history/clinic-history-page/clinic-history-page.component';

const routes: Routes = [
  { path: '', component: ClinicHistoryPageComponent,  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
