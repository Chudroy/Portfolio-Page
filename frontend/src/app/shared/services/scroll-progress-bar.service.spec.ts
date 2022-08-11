import { TestBed } from '@angular/core/testing';

import { ScrollProgressBarService } from './scroll-progress-bar.service';

describe('ScrollProgressBarService', () => {
  let service: ScrollProgressBarService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ScrollProgressBarService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
