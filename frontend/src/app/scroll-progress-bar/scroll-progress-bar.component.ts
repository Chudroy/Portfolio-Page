import { Component, OnInit } from '@angular/core';
import { ScrollProgressBarService } from '../shared/services/scroll-progress-bar.service';
@Component({
  selector: 'app-scroll-progress-bar',
  templateUrl: './scroll-progress-bar.component.html',
  styleUrls: ['./scroll-progress-bar.component.css'],
})
export class ScrollProgressBarComponent implements OnInit {
  progressValue!: number;

  constructor(private scrollProgressBarService: ScrollProgressBarService) {}

  ngOnInit() {
    this.scrollProgressBarService.scrollProgress$.subscribe((value: number) => {
      this.progressValue = value;
    });
  }
}
