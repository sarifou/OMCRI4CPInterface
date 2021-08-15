import { TestBed } from '@angular/core/testing';

import { TeleopService } from './teleop.service';

describe('TeleopService', () => {
  let service: TeleopService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TeleopService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
