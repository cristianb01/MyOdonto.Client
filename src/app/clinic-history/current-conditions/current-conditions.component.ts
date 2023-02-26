import { Component, EventEmitter, Output } from '@angular/core';
import { AbstractControl, FormArray, FormBuilder, FormGroup } from '@angular/forms';
import { CurrenConditionFormResultWrapper, CurrentCondition } from 'src/app/models/current-conditions.model';
import { SectionType } from 'src/app/models/section-type.model';
import { CurrentConditionsService } from 'src/app/services/current-conditions.service';
import { BaseClinicHistorySectionComponent } from '../base-clinic-history-section/base-clinic-history-section.component';

@Component({
  selector: 'app-current-conditions',
  templateUrl: './current-conditions.component.html',
  styleUrls: ['./current-conditions.component.scss']
})
export class CurrentConditionsComponent extends BaseClinicHistorySectionComponent {

  public currentConditionsForm!: FormGroup;
  public currenConditionsTypes!: SectionType[];

  constructor(private currentConditionsService: CurrentConditionsService,
              private formBuilder: FormBuilder) {
      super();
      this.getCurrentConditionsTypes().then(types => {
      this.currenConditionsTypes = types;
      this.currentConditionsForm = this.createForm();
    });
  }

  private getCurrentConditionsTypes(): Promise<SectionType[]> {
    return this.currentConditionsService.getAllCurrentConditions();
  }

  private createForm(): FormGroup {
    const forms = this.currenConditionsTypes.map((type: SectionType) =>{
      return this.formBuilder.group({
        description: type.description,
        id: type.id,
        hasSufferedFrom: false
      });
    });

    return this.formBuilder.group({
      observations: null,
      mainForm: this.formBuilder.array(forms)
    });
  }


  protected override mapFormToModel(): CurrenConditionFormResultWrapper {
    return {
      observations: this.currentConditionsForm.get('observations')?.value,
      currentConditions: this.getFormArray.controls.map(currentForm => {
        return {
          currentConditionTypeId: currentForm.get('id')?.value,
          hasSufferedFrom: currentForm.get('hasSufferedFrom')?.value
        } as CurrentCondition
      })
    }
  }

  public noCheckboxChecked(currentForm: AbstractControl): void {
    currentForm.get('hasSufferedFrom')?.setValue(false);
  }
}
