import { TestBed } from '@angular/core/testing';

import { CurdOprService } from './curd-opr.service';

describe('CurdOprService', () => {
  let service: CurdOprService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CurdOprService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
