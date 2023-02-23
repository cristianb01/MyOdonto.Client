import { Component, EventEmitter, Output } from '@angular/core';
import { AbstractControl, FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { FacialAnalysisAspect, FacialAnalysisCharacteristic, FacialAnalysisCharacteristicRequestModel, FacialAnalysisFormResultWrapper } from 'src/app/models/facial-analysis.model';
import { FacialAnalysisService } from 'src/app/services/facial-analysis.service';

@Component({
  selector: 'app-facial-analysis',
  templateUrl: './facial-analysis.component.html',
  styleUrls: ['./facial-analysis.component.scss']
})
export class FacialAnalysisComponent {

  @Output() onFormSubmit = new EventEmitter<FacialAnalysisFormResultWrapper>();

  public facialAnalysisAscpects!: FacialAnalysisAspect[]
  public form!: FormGroup;

  constructor(private facialAnalysisService: FacialAnalysisService,
              private formBuilder: FormBuilder) {
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
      observations: '',
      mainForm: this.formBuilder.array(forms)
    });
  }

  public submit(): boolean {
    const mappedModel = this.mapFormToModel();
    this.onFormSubmit.emit(mappedModel);
    return true;
  }

  public mapFormToModel(): FacialAnalysisFormResultWrapper {
    return {
      observations: this.form.get('observations')?.value,
      facialAnalysisCharacteristics: this.getFormArray.controls.map(currentForm => {
        return {
          facialAnalysisCharacteristicId: currentForm.get('characteristicId')?.value
        } as FacialAnalysisCharacteristicRequestModel
      })
    } as FacialAnalysisFormResultWrapper
  }

  public get getFormArray(): FormArray {
    return this.form.get('mainForm') as FormArray;
  }

  public getCharacteristics(aspectId: number): FacialAnalysisCharacteristic[] {
    return this.facialAnalysisAscpects.find(aspect => aspect.id === aspectId)?.facialAnalysisCharacteristics as FacialAnalysisCharacteristic[];
  }
}
