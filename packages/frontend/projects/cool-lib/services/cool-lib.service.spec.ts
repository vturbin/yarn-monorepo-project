import { TestBed } from '@angular/core/testing';

import { CoolLibService } from './cool-lib.service';

describe('CoolLibService', () => {
  let service: CoolLibService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CoolLibService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
