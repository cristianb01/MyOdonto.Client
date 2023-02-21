import { TestBed } from '@angular/core/testing';

import { NonPathologicalPersonalBackgroundService } from './non-pathological-personal-background.service';

describe('NonPathologicalPersonalBackgroundService', () => {
  let service: NonPathologicalPersonalBackgroundService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NonPathologicalPersonalBackgroundService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
