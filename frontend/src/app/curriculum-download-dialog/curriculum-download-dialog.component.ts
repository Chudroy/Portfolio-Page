import { Component, OnInit } from '@angular/core';
import { DownloadCurriculumService } from '../shared/services/download-curriculum.service';

@Component({
  selector: 'app-curriculum-download-dialog',
  templateUrl: './curriculum-download-dialog.component.html',
  styleUrls: ['./curriculum-download-dialog.component.css'],
})
export class CurriculumDownloadDialogComponent implements OnInit {
  constructor(private downloadCurriculumService: DownloadCurriculumService) {}

  ngOnInit(): void {}

  downloadCurriculumEnglish() {
    this.downloadCurriculumService
      .downloadCurriculum('english')
      .subscribe((data) => {
        console.log(data);

        let blob = new Blob([data], { type: 'application/pdf' });
        let pdfUrl = window.URL.createObjectURL(blob);
        window.open(pdfUrl, '_blank');
      });
  }
  downloadCurriculumSpanish() {
    this.downloadCurriculumService
      .downloadCurriculum('spanish')
      .subscribe((data) => {
        let blob = new Blob([data], { type: 'application/pdf' });
        let pdfUrl = window.URL.createObjectURL(blob);
        window.open(pdfUrl, '_blank');
      });
  }
}
