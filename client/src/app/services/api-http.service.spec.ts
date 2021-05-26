import { TestBed } from '@angular/core/testing';

import { ApiHTTPService } from './api-http.service';

describe('ApiHTTPService', () => {
  let service: ApiHTTPService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ApiHTTPService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
