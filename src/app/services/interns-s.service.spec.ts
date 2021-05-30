import { TestBed } from '@angular/core/testing';

import { InternsSService } from './interns-s.service';

describe('InternsSService', () => {
  let service: InternsSService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(InternsSService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
