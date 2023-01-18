import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ClinicHistoryModule } from './clinic-history/clinic-history.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ClinicHistoryModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
