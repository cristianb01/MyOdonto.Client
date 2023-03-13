import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Doctor } from 'src/app/models/doctor.model';

@Component({
  selector: 'app-clinic-history-header',
  templateUrl: './clinic-history-header.component.html',
  styleUrls: ['./clinic-history-header.component.scss']
})
export class ClinicHistoryHeaderComponent implements OnInit {

  @Input() doctor!: Doctor;

  @Output() onFormSubmit = new EventEmitter<number>();

  public form!: FormGroup;

  constructor(private formBuilder: FormBuilder) {
  }
  
  ngOnInit(): void {
    this.form = this.createForm();
  }

  public createForm(): FormGroup {
    return this.formBuilder.group({
      doctorName: [{value: `${this.doctor.name} ${this.doctor.surname}`, disabled: true }, Validators.required],
      identification: [{value: `${this.doctor.professionalIndentification}`, disabled: true}, Validators.required],
      id: [`${this.doctor.id}`, Validators.required]
    });
  }

  public submit(): void {
    if(this.form.valid) {
      this.onFormSubmit.emit(this.doctor.id);
    }
  }
}
