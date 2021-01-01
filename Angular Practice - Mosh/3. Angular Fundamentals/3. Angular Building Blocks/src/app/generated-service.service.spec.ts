import { TestBed } from '@angular/core/testing';

import { GeneratedServiceService } from './generated-service.service';

describe('GeneratedServiceService', () => {
  let service: GeneratedServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GeneratedServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
