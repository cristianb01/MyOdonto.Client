import { Component } from '@angular/core';
import { AbstractControl, FormArray, FormBuilder, FormGroup } from '@angular/forms';
import { MatTableDataSource } from '@angular/material/table';
import { BehaviorSubject } from 'rxjs';
import { FamilyBackgroundType } from 'src/app/models/family-background.model';
import { FamilyBackgroundService } from 'src/app/services/family-background.service';

@Component({
  selector: 'app-family-background',
  templateUrl: './family-background.component.html',
  styleUrls: ['./family-background.component.scss']
})
export class FamilyBackgroundComponent {

  public familyBackgroundTypes!: FamilyBackgroundType[];

  public familyBackgroundForm!: FormGroup;

  public headers = ['description', 'mother'];

  public dataSource = new MatTableDataSource();


  constructor(private familyBackgroundService: FamilyBackgroundService,
              private formBuilder: FormBuilder) {

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
        paternalGrandFather: false,
        paternalGrandMother: false,
      });
    });

    return this.formBuilder.group({
      mainForm: this.formBuilder.array(forms)
    });
  }

  private getFamilyBackgroundTypes(): Promise<FamilyBackgroundType[]> {
    return this.familyBackgroundService.getAllFamilyBackgroundTypes();
  }

  public get getFormArray(): FormArray {
    return this.familyBackgroundForm.get('mainForm') as FormArray;
  }
}
