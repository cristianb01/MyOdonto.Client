import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClinicHistoryContainerComponent } from './clinic-history-container.component';

describe('ClinicHistoryContainerComponent', () => {
  let component: ClinicHistoryContainerComponent;
  let fixture: ComponentFixture<ClinicHistoryContainerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ClinicHistoryContainerComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ClinicHistoryContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
