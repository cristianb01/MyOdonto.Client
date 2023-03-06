import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OdontogramComponent } from './odontogram/odontogram.component';
import { AppCommonModule } from '../app-common/app-common.module';



@NgModule({
  declarations: [
    OdontogramComponent
  ],
  imports: [
    CommonModule,
    AppCommonModule
  ],
  exports: [OdontogramComponent]
})
export class OdontogramModule { }
