import { TestBed } from '@angular/core/testing';

import { CurrentConditionsService } from './current-conditions.service';

describe('CurrentConditionsService', () => {
  let service: CurrentConditionsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CurrentConditionsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
