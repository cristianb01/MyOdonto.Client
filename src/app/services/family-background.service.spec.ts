import { TestBed } from '@angular/core/testing';

import { FamilyBackgroundService } from './family-background.service';

describe('FamilyBackgroundService', () => {
  let service: FamilyBackgroundService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FamilyBackgroundService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
