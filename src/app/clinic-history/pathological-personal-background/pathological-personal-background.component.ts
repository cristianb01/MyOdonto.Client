import { Component, EventEmitter, Input, Output } from '@angular/core';
import { AbstractControl, FormArray, FormBuilder, FormControl, FormGroup, ValidatorFn, Validators } from '@angular/forms';
import { PathologicalPersonalBackgroundTypesService } from 'src/app/services/pathological-personal-background-types.service';
import { MatFormFieldControl } from '@angular/material/form-field';
import { PathologicalPersonalBackground } from 'src/app/models/pathological-personal-background.model';
import { SectionType } from 'src/app/models/section-type.model';
import { BaseClinicHistorySectionComponent } from '../base-clinic-history-section/base-clinic-history-section.component';

@Component({
  selector: 'app-pathological-personal-background',
  templateUrl: './pathological-personal-background.component.html',
  styleUrls: ['./pathological-personal-background.component.scss']
})
export class PathologicalPersonalBackgroundComponent extends BaseClinicHistorySectionComponent{

  public pathologicalPersonalBackgroundTypes!: SectionType[];

  constructor(private pathologicalPersonalBackgroundService: PathologicalPersonalBackgroundTypesService,
              private formbuilder: FormBuilder) {
    super();
    this.getAllPathologicalPersonalBackgroundTypes()
      .then(pathologicalPersonalBackgroundTypes => {
        this.pathologicalPersonalBackgroundTypes = pathologicalPersonalBackgroundTypes;
        this.form = this.createForm();
        this.startChekingHasSufferedFromCheckBox();
      });;
  }


  
  private getAllPathologicalPersonalBackgroundTypes(): Promise<SectionType[]> {
    return this.pathologicalPersonalBackgroundService.getAllPathologicalPersonalBackgroundTypes();
  }
  
  private createForm(): FormGroup {
    let forms = this.pathologicalPersonalBackgroundTypes.map((type) => {
      return this.formbuilder.group({
        description: [type.description],
        id: [type.id],
        hasSufferedFrom: [false, Validators.required],
        date: [null, Validators.required]
      }, {validators: this.customValidator('hasSufferedFrom', 'date')});
    });

    return this.formbuilder.group({
      mainForm: this.formbuilder.array(forms)
    });
  }

  public isFormInvalid(formId: number, controlName: string): boolean {
    const form = this.getFormArray.at(formId);

    const control = form.get(controlName) as FormControl;

    return control.invalid;
  }


  protected override mapFormToModel(): PathologicalPersonalBackground[] {
    const output = this.getFormArray.controls.map(currentForm => {
      return {
        date: currentForm.get('date')?.value,
        hasSufferedFrom: currentForm.get('hasSufferedFrom')?.value,
        pathologicalPersonalBackgroundTypeId: currentForm.get('id')?.value
      } as PathologicalPersonalBackground
    });

    return output;
  }

  private startChekingHasSufferedFromCheckBox(): void {
    
    this.getFormArray.controls.forEach((currentForm) => {
      currentForm.get('hasSufferedFrom')?.valueChanges.subscribe((value) => !value ? currentForm.get('date')?.setValue(null) : null);
    })
  }

  customValidator(hasSufferedFromControlName: string, inputDateContronName: string) {
    return (formGroup: AbstractControl) => {
      const hasSufferedFromControl = formGroup.get(hasSufferedFromControlName) as FormControl;;
      const dateInputControl = formGroup.get(inputDateContronName) as FormControl;

      const isDateInputControlInvalid = hasSufferedFromControl.value === true && dateInputControl.value === null;
      const isHasSufferedFromControlInvalid = dateInputControl.value !== null && hasSufferedFromControl.value === false;

      isDateInputControlInvalid ? dateInputControl.setErrors({ invalid: true }) : dateInputControl.setErrors(null);
      isHasSufferedFromControlInvalid ? hasSufferedFromControl.setErrors({ invalid: true }) : hasSufferedFromControl.setErrors(null);
    }
  }
}
