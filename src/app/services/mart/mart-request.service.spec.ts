import { TestBed } from '@angular/core/testing';

import { MartRequestService } from './mart-request.service';

describe('MartRequestService', () => {
  let service: MartRequestService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MartRequestService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
