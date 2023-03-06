import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ClinicHistoryPageComponent } from './clinic-history/clinic-history-page/clinic-history-page.component';
import { OdontogramComponent } from './odontogram/odontogram/odontogram.component';

const routes: Routes = [
  { path: '', component: ClinicHistoryPageComponent,  },
  { path: 'odontogram', component: OdontogramComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
