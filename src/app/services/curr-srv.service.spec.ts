import { TestBed } from '@angular/core/testing';

import { CurrSrvService } from './curr-srv.service';

describe('CurrSrvService', () => {
  let service: CurrSrvService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CurrSrvService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
