import { TestBed } from '@angular/core/testing';

import { scrollProgressBarService } from './scroll-progress-bar.service';

describe('scrollProgressBarService', () => {
  let service: scrollProgressBarService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(scrollProgressBarService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
