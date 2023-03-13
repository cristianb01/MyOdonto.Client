import { Component, EventEmitter, Output } from '@angular/core';
import { FormArray, FormGroup } from '@angular/forms';
import { FormValidationException } from 'src/app/app-common/exceptions/form-validation-exception';

@Component({
  selector: 'app-base-clinic-history-section',
  template: `
    <p>
      base-clinic-history-section works!
    </p>
  `,
  styles: [
  ]
})
export abstract class BaseClinicHistorySectionComponent {
    
    @Output() public onFormSubmit = new EventEmitter<any>();

    public form!: FormGroup;

    public submit(): void {
      if (this.form.valid) {
          var mappedModel = this.mapFormToModel();
          this.onFormSubmit.emit(mappedModel);
      }
      else {
        debugger
        throw new FormValidationException("Hay un error en el formulario");
      }
    }

    protected abstract mapFormToModel(): any;

    public get getFormArray(): FormArray {
        return this.form.get('mainForm') as FormArray;
    }
}
