import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CurriculumDownloadDialogComponent } from './curriculum-download-dialog.component';

describe('CurriculumDownloadDialogComponent', () => {
  let component: CurriculumDownloadDialogComponent;
  let fixture: ComponentFixture<CurriculumDownloadDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CurriculumDownloadDialogComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CurriculumDownloadDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
