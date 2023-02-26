import { Component, EventEmitter, Output } from '@angular/core';
import { AbstractControl, FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { FacialAnalysisAspect, FacialAnalysisCharacteristic, FacialAnalysisCharacteristicRequestModel, FacialAnalysisFormResultWrapper } from 'src/app/models/facial-analysis.model';
import { FacialAnalysisService } from 'src/app/services/facial-analysis.service';
import { BaseClinicHistorySectionComponent } from '../base-clinic-history-section/base-clinic-history-section.component';

@Component({
  selector: 'app-facial-analysis',
  templateUrl: './facial-analysis.component.html',
  styleUrls: ['./facial-analysis.component.scss']
})
export class FacialAnalysisComponent extends BaseClinicHistorySectionComponent {

  public facialAnalysisAscpects!: FacialAnalysisAspect[]

  constructor(private facialAnalysisService: FacialAnalysisService,
              private formBuilder: FormBuilder) {
      super();
      this.facialAnalysisService.geatAllFacialAnalysisAspects().then(aspects => {
      this.facialAnalysisAscpects = aspects;
      this.form = this.createForm();
    });
  }

  private createForm(): FormGroup {
    const forms = this.facialAnalysisAscpects.map((aspect: FacialAnalysisAspect) => {
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

  protected override mapFormToModel(): FacialAnalysisFormResultWrapper {
    return {
      observations: this.form.get('observations')?.value,
      facialAnalysisCharacteristics: this.getFormArray.controls.map(currentForm => {
        return {
          facialAnalysisCharacteristicId: currentForm.get('characteristicId')?.value
        } as FacialAnalysisCharacteristicRequestModel
      })
    } as FacialAnalysisFormResultWrapper
  }

  public getCharacteristics(aspectId: number): FacialAnalysisCharacteristic[] {
    return this.facialAnalysisAscpects.find(aspect => aspect.id === aspectId)?.facialAnalysisCharacteristics as FacialAnalysisCharacteristic[];
  }
}
