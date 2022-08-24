import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { CurriculumDownloadDialogComponent } from '../curriculum-download-dialog/curriculum-download-dialog.component';
@Component({
  selector: 'app-curriculum-download',
  templateUrl: './curriculum-download.component.html',
  styleUrls: ['./curriculum-download.component.css'],
})
export class CurriculumDownloadComponent implements OnInit {
  constructor(private dialog: MatDialog) {}
  openDialog() {
    this.dialog.open(CurriculumDownloadDialogComponent);
  }
  ngOnInit(): void {}
}
