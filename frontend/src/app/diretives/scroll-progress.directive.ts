import { Directive, HostListener } from '@angular/core';
import { scrollProgressBarService } from '../shared/services/scroll-progress-bar.service';
@Directive({
  selector: '[appscrollProgress]',
})
export class scrollProgressDirective {
  constructor(private scrollProgressBarService: scrollProgressBarService) {}
  @HostListener('scroll', ['$event'])
  ProgressScrollbar(event: any) {
    let winScroll = event.currentTarget.scrollTop;
    let height =
      event.currentTarget.scrollHeight - event.currentTarget.clientHeight;
    let scrolled = (winScroll / height) * 100;

    this.scrollProgressBarService.setscrollProgress(scrolled);
  }
}
