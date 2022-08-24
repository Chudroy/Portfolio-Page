import { TestBed } from '@angular/core/testing';

import { DownloadCurriculumService } from './download-curriculum.service';

describe('DownloadCurriculumService', () => {
  let service: DownloadCurriculumService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DownloadCurriculumService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
