import { Component, OnInit } from '@angular/core';

declare const startOdontogram: any;
declare const startPencil: any;

@Component({
  selector: 'app-odontogram',
  templateUrl: './odontogram.component.html',
  styleUrls: ['./odontogram.component.scss']
})
export class OdontogramComponent implements OnInit {
  
  
  ngOnInit(): void {
    startOdontogram();
    startPencil();
  }
  
}
