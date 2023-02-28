import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { FunctionalAnalysisAspect, FunctionalAnalysisCharacteristic, FunctionalAnalysisFormResultWrapper, FunctionalAnalysisRequestModel } from 'src/app/models/functional-analysis.model';
import { FunctionalAnalysisService } from 'src/app/services/functional-analysis.service';
import { BaseClinicHistorySectionComponent } from '../base-clinic-history-section/base-clinic-history-section.component';

@Component({
  selector: 'app-functional-analysis',
  templateUrl: './functional-analysis.component.html',
  styleUrls: ['./functional-analysis.component.scss']
})
export class FunctionalAnalysisComponent extends BaseClinicHistorySectionComponent{
  private functionalAnalysisAspects!: FunctionalAnalysisAspect[];

  constructor(private formBuilder: FormBuilder,
              private functionalAnalysisService: FunctionalAnalysisService) {
    super();
    this.getAllFunctionalAnalysisAspects().then(aspects => {
      this.functionalAnalysisAspects = aspects;
      this.form = this.createForm();
    });
  }

  private getAllFunctionalAnalysisAspects(): Promise<FunctionalAnalysisAspect[]> {
    return this.functionalAnalysisService.getAllFunctionalAnalysisAspects();
  }

  private createForm(): FormGroup {
    const forms = this.functionalAnalysisAspects.map((aspect: FunctionalAnalysisAspect) => {
      return this.formBuilder.group({
        description: aspect.description,
        aspectId: aspect.id,
        characteristicId: [null, Validators.required],
      });
    });

    return this.formBuilder.group({
      observations: null,
      mainForm: this.formBuilder.array(forms)
    });
  }

  protected override mapFormToModel(): FunctionalAnalysisFormResultWrapper {
    return {
      observations: this.form.get('observations')?.value,
      functionalAnalysisCharacteristics: this.getFormArray.controls.map(currentForm => {
        return {
          functionalAnalysisCharacteristicId: currentForm.get('characteristicId')?.value
        } as FunctionalAnalysisRequestModel
      })
    } as FunctionalAnalysisFormResultWrapper;
  }

  public getCharacteristics(aspectId: number): FunctionalAnalysisCharacteristic[] {
    return this.functionalAnalysisAspects.find(aspect => aspect.id === aspectId)?.functionalAnalysisCharacteristics as FunctionalAnalysisCharacteristic[];
  }
}
