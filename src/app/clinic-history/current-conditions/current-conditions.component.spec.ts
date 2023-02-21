import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CurrenConditionsComponent } from './current-conditions.component';

describe('CurrenConditionsComponent', () => {
  let component: CurrenConditionsComponent;
  let fixture: ComponentFixture<CurrenConditionsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CurrenConditionsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CurrenConditionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
