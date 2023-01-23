import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Form, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Patient } from 'src/app/models/patient.model';

@Component({
  selector: 'app-clinic-history-patient-section',
  templateUrl: './clinic-history-patient-section.component.html',
  styleUrls: ['./clinic-history-patient-section.component.scss']
})
export class ClinicHistoryPatientSectionComponent {

  @Input('form') patientForm!: FormGroup;

  @Input() genderValues!: string[]
  @Input() maritalStatuses!: string[];

  constructor() {
  }
}
