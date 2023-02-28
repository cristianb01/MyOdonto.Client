import { Directive, ElementRef, Input, OnInit } from '@angular/core';

@Directive({
  selector: '[appStripedRows]'
})
export class StripedRowsDirective implements OnInit {

  @Input() rowIndex!: number;

  constructor(private el: ElementRef) { 
  }
  
  ngOnInit(): void {
    this.rowIndex%2 == 0? this.el.nativeElement.style.backgroundColor = '#f7f7f7' : 'unset';
  }

}
