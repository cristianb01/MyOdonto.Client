import { TestBed } from '@angular/core/testing';

import { FunctionalAnalysisService } from './functional-analysis.service';

describe('FunctionalAnalysisService', () => {
  let service: FunctionalAnalysisService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FunctionalAnalysisService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
