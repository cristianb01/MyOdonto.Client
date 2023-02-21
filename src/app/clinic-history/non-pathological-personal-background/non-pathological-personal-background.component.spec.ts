import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NonPathologicalPersonalBackgroundComponent } from './non-pathological-personal-background.component';

describe('NonPathologicalPersonalBackgroundComponent', () => {
  let component: NonPathologicalPersonalBackgroundComponent;
  let fixture: ComponentFixture<NonPathologicalPersonalBackgroundComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NonPathologicalPersonalBackgroundComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NonPathologicalPersonalBackgroundComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
