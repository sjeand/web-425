import { TestBed } from '@angular/core/testing';

import { StandardFeesService } from './standard-fees.service';

describe('StandardFeesService', () => {
  let service: StandardFeesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(StandardFeesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
