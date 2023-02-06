import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PathologicalPersonalBackgroundComponent } from './pathological-personal-background.component';

describe('PathologicalPersonalBackgroundComponent', () => {
  let component: PathologicalPersonalBackgroundComponent;
  let fixture: ComponentFixture<PathologicalPersonalBackgroundComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PathologicalPersonalBackgroundComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PathologicalPersonalBackgroundComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
