import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SectionHeaderComponent } from './section-header/section-header.component';
import { StripedRowsDirective } from './directives/striped-rows.directive';



@NgModule({
  declarations: [
    SectionHeaderComponent,
    StripedRowsDirective
  ],
  imports: [
    CommonModule
  ],
  exports: [SectionHeaderComponent, StripedRowsDirective]
})
export class AppCommonModule { }
