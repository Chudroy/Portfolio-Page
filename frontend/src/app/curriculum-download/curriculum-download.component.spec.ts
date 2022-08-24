import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CurriculumDownloadComponent } from './curriculum-download.component';

describe('CurriculumDownloadComponent', () => {
  let component: CurriculumDownloadComponent;
  let fixture: ComponentFixture<CurriculumDownloadComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CurriculumDownloadComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CurriculumDownloadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
