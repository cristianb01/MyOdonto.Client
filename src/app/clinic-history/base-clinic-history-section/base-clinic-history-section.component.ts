import { Component, EventEmitter, Output } from '@angular/core';
import { FormArray, FormGroup } from '@angular/forms';

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

    public submit(): boolean {
        if (this.form.valid) {
            var mappedModel = this.mapFormToModel();
            this.onFormSubmit.emit(mappedModel);
            return true;
        }
        return false;
    }

    protected abstract mapFormToModel(): any;

    public get getFormArray(): FormArray {
        return this.form.get('mainForm') as FormArray;
    }
}
