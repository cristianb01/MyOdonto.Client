import { Component, EventEmitter, Output } from '@angular/core';
import { FormArray, FormBuilder, FormGroup } from '@angular/forms';
import { NonPathologicalPersonalBackground } from 'src/app/models/non-pathological-personal-background.model';
import { SectionType } from 'src/app/models/section-type.model';
import { NonPathologicalPersonalBackgroundService } from 'src/app/services/non-pathological-personal-background.service';

@Component({
  selector: 'app-non-pathological-personal-background',
  templateUrl: './non-pathological-personal-background.component.html',
  styleUrls: ['./non-pathological-personal-background.component.scss']
})
export class NonPathologicalPersonalBackgroundComponent {

  @Output() onFormSubmit = new EventEmitter<NonPathologicalPersonalBackground[]>();

  public nonPathologicalPersonalBackgroundForm!: FormGroup;

  public nonPathologicalPersonalBackgroundTypes!: SectionType[];

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

  public submit(): boolean {
    const mappedModel = this.mapFormToModel();
    this.onFormSubmit.emit(mappedModel);
    return true;
  }

  private mapFormToModel(): NonPathologicalPersonalBackground[] {
    return this.getFormArray.controls.map(currentForm => {
      return {
        hasSufferedFrom: currentForm.get('hasSufferedFrom')?.value,
        nonPathologicalPersonalBackgroundTypeId: currentForm.get('id')?.value,
        observations: currentForm.get('observation')?.value
      } as NonPathologicalPersonalBackground
    });
  }

  public get getFormArray(): FormArray {
    return this.nonPathologicalPersonalBackgroundForm.get('mainForm') as FormArray;
  }
}
