import { Component, Input } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { PathologicalPersonalBackgroundType } from 'src/app/models/pathological-personal-background';
import { PathologicalPersonalBackgroundTypesService } from 'src/app/services/pathological-personal-background-types.service';

@Component({
  selector: 'app-pathological-personal-background',
  templateUrl: './pathological-personal-background.component.html',
  styleUrls: ['./pathological-personal-background.component.scss']
})
export class PathologicalPersonalBackgroundComponent {

  public pathologicalPersonalBackgroundTypes!: PathologicalPersonalBackgroundType[];

  @Input() pathologicalPersonalBackgroundForm!: FormGroup;

  constructor(private pathologicalPersonalBackgroundService: PathologicalPersonalBackgroundTypesService) {
    this.getAllPathologicalPersonalBackgroundTypes()
      .then(pathologicalPersonalBackgroundTypes => {
        this.pathologicalPersonalBackgroundTypes = pathologicalPersonalBackgroundTypes;
      });;
  }

  private getAllPathologicalPersonalBackgroundTypes(): Promise<PathologicalPersonalBackgroundType[]> {
    return this.pathologicalPersonalBackgroundService.getAllPathologicalPersonalBackgroundTypes();
  }

  

  public isControlInvalid(controlName: string): boolean {
    return this.pathologicalPersonalBackgroundForm.controls[controlName].touched 
      && this.pathologicalPersonalBackgroundForm.controls[controlName].invalid;
  }
}
