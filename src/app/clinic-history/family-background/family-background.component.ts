import { Component, EventEmitter, Output } from '@angular/core';
import { AbstractControl, FormArray, FormBuilder, FormGroup } from '@angular/forms';
import { MatTableDataSource } from '@angular/material/table';
import { FamilyBackground, FamilyBackgroundFormResultWrapper } from 'src/app/models/family-background.model';
import { SectionType } from 'src/app/models/section-type.model';
import { FamilyBackgroundService } from 'src/app/services/family-background.service';
import { BaseClinicHistorySectionComponent } from '../base-clinic-history-section/base-clinic-history-section.component';

@Component({
  selector: 'app-family-background',
  templateUrl: './family-background.component.html',
  styleUrls: ['./family-background.component.scss']
})
export class FamilyBackgroundComponent extends BaseClinicHistorySectionComponent {

  public familyBackgroundTypes!: SectionType[];

  public familyBackgroundForm!: FormGroup;

  public headers = ['description', 'mother', 'maternalGrandmother', 'maternalGrandfather', 'maternalOthers',
                    'father', 'paternalGrandmother', 'paternalGrandfather', 'paternalOthers'];

  public dataSource = new MatTableDataSource();


  constructor(private familyBackgroundService: FamilyBackgroundService,
              private formBuilder: FormBuilder) {

      super();
      this.getFamilyBackgroundTypes().then(familyBackgroundTypes => {
      this.familyBackgroundTypes = familyBackgroundTypes;
      this.familyBackgroundForm = this.createForm();
      this.dataSource.data = this.getFormArray.getRawValue();
    });
  }

  private createForm(): FormGroup {
    const forms = this.familyBackgroundTypes.map((type) => {
      return this.formBuilder.group({
        description: type.description,
        id: type.id,
        mother: false,
        father: false,
        brother: false,
        maternalGrandfather: false,
        maternalGrandmother: false,
        maternalOthers: false,
        paternalOthers: false,
        paternalGrandfather: false,
        paternalGrandmother: false,
      });
    });

    return this.formBuilder.group({
      observations: [''],
      mainForm: this.formBuilder.array(forms)
    });
  }

  private getFamilyBackgroundTypes(): Promise<SectionType[]> {
    return this.familyBackgroundService.getAllFamilyBackgroundTypes();
  }

  protected override mapFormToModel(): FamilyBackgroundFormResultWrapper  {
    return {
        observations: this.familyBackgroundForm.get('observations')?.value,
        familyBackgrounds: this.getFormArray.controls.map(currentForm => {
         return {
           brother: currentForm.get('brother')?.value,
           familyBackgroundTypeId: currentForm.get('id')?.value,
           father: currentForm.get('father')?.value,
           mother: currentForm.get('mother')?.value,
           maternalGrandfather: currentForm.get('maternalGrandfather')?.value,
           maternalGrandmother: currentForm.get('maternalGrandmother')?.value,
           maternalOthers: currentForm.get('maternalOthers')?.value,
           paternalGrandfather: currentForm.get('paternalGrandfather')?.value,
           paternalGrandmother: currentForm.get('paternalGrandmother')?.value,
           paternalOthers: currentForm.get('paternalOthers')?.value
         } as FamilyBackground
       })
    }
  }
}
