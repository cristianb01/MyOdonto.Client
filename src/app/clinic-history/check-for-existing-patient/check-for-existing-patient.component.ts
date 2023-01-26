import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-check-for-existing-patient',
  templateUrl: './check-for-existing-patient.component.html',
  styleUrls: ['./check-for-existing-patient.component.scss']
})
export class CheckForExistingPatientComponent {

  public form: FormGroup;

  constructor(private formBuilder: FormBuilder) {
    this.form = this.createForm();
  }

  private createForm(): FormGroup {
    return this.formBuilder.group({
      identification: ['', Validators.required]
    });
  }

  public isFormInvalid(controlName: string): boolean {
    return this.form.controls[controlName].invalid && this.form.controls[controlName].touched;
  }
}
