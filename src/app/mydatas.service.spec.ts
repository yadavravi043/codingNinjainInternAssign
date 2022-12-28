import { TestBed } from '@angular/core/testing';

import { MydatasService } from './mydatas.service';

describe('MydatasService', () => {
  let service: MydatasService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MydatasService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
