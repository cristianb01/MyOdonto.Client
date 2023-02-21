import { Component } from '@angular/core';
import { FormArray, FormBuilder, FormGroup } from '@angular/forms';
import { NonPathologicalPersonalBackgroundType } from 'src/app/models/non-pathological-personal-background-types.model';
import { NonPathologicalPersonalBackgroundService } from 'src/app/services/non-pathological-personal-background.service';

@Component({
  selector: 'app-non-pathological-personal-background',
  templateUrl: './non-pathological-personal-background.component.html',
  styleUrls: ['./non-pathological-personal-background.component.scss']
})
export class NonPathologicalPersonalBackgroundComponent {

  public nonPathologicalPersonalBackgroundForm!: FormGroup;

  public nonPathologicalPersonalBackgroundTypes!: NonPathologicalPersonalBackgroundType[];

  constructor(private nonPathologicalPersonalBackgroundService: NonPathologicalPersonalBackgroundService,
              private formBuilder: FormBuilder) {
    this.nonPathologicalPersonalBackgroundService.getAllNonPathologicalPersonalBackgroundTypes()
      .then(nonPathologicalPersonalBackgroundTypes => {
        this.nonPathologicalPersonalBackgroundTypes = nonPathologicalPersonalBackgroundTypes;
        this.nonPathologicalPersonalBackgroundForm = this.createForm();
      });
  }

  private createForm(): FormGroup {
    const formArray = this.nonPathologicalPersonalBackgroundTypes.map(type => {
      return this.formBuilder.group({
        id: type.id,
        description: type.description,
        observation: [''],
        hasSufferedFrom: false
      });
    });

    return this.formBuilder.group({
      mainForm: this.formBuilder.array(formArray)
    });
  }

  public get getFormArray(): FormArray {
    return this.nonPathologicalPersonalBackgroundForm.get('mainForm') as FormArray;
  }
}
