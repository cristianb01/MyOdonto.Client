import { Component, Input } from '@angular/core';
import { AbstractControl, FormArray, FormBuilder, FormControl, FormGroup, ValidatorFn, Validators } from '@angular/forms';
import { PathologicalPersonalBackgroundType } from 'src/app/models/pathological-personal-background';
import { PathologicalPersonalBackgroundTypesService } from 'src/app/services/pathological-personal-background-types.service';
import { MatFormFieldControl } from '@angular/material/form-field';

@Component({
  selector: 'app-pathological-personal-background',
  templateUrl: './pathological-personal-background.component.html',
  styleUrls: ['./pathological-personal-background.component.scss']
})
export class PathologicalPersonalBackgroundComponent {

  public pathologicalPersonalBackgroundTypes!: PathologicalPersonalBackgroundType[];

  pathologicalPersonalBackgroundForm!: FormGroup;;

  constructor(private pathologicalPersonalBackgroundService: PathologicalPersonalBackgroundTypesService,
              private formbuilder: FormBuilder) {
    this.getAllPathologicalPersonalBackgroundTypes()
      .then(pathologicalPersonalBackgroundTypes => {
        this.pathologicalPersonalBackgroundTypes = pathologicalPersonalBackgroundTypes;
        this.pathologicalPersonalBackgroundForm = this.createForm();
        this.asdf();
      });;
  }


  
  private getAllPathologicalPersonalBackgroundTypes(): Promise<PathologicalPersonalBackgroundType[]> {
    return this.pathologicalPersonalBackgroundService.getAllPathologicalPersonalBackgroundTypes();
  }
  
  createForm() {
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

  public get getFormArray(): FormArray {
    return this.pathologicalPersonalBackgroundForm.get('mainForm') as FormArray;
  }

  public isFormInvalid(formId: number, controlName: string): boolean {
    const form = this.getFormArray.at(formId);

    const control = form.get(controlName) as FormControl;

    return control.invalid;
  }

  public submit() {
    debugger;

    if (this.getFormArray.valid) {
      // TODO: post to api
    }
  }

  private asdf () {
    
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
