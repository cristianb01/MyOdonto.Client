import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClinicHistoryHeaderComponent } from './clinic-history-header.component';

describe('ClinicHistoryHeaderComponent', () => {
  let component: ClinicHistoryHeaderComponent;
  let fixture: ComponentFixture<ClinicHistoryHeaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ClinicHistoryHeaderComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ClinicHistoryHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
