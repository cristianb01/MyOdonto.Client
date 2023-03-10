import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';

declare const startOdontogram: any;
declare const startPencil: any;

@Component({
  selector: 'app-odontogram',
  templateUrl: './odontogram.component.html',
  styleUrls: ['./odontogram.component.scss']
})
export class OdontogramComponent implements OnInit {
  
  /**
   *
   */
  constructor(private router: Router) {
    
  }
  
  ngOnInit(): void {
    startOdontogram();
    startPencil();
  }

  
  public onSaveButtonClick(): void {
    Swal.fire({
      title: 'Odontograma guardado',
      confirmButtonText: 'Aceptar'
    })
    .then(() => {
      window.close();
    });
  }
}
