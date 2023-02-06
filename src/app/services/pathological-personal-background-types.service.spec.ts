import { TestBed } from '@angular/core/testing';

import { PathologicalPersonalBackgroundTypesService } from './pathological-personal-background-types.service';

describe('PathologicalPersonalBackgroundTypesService', () => {
  let service: PathologicalPersonalBackgroundTypesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PathologicalPersonalBackgroundTypesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
