import { Directive, HostListener } from '@angular/core';
import { ScrollProgressBarService } from '../shared/services/scroll-progress-bar.service';
@Directive({
  selector: '[appScrollProgress]',
})
export class ScrollProgressDirective {
  constructor(private scrollProgressBarService: ScrollProgressBarService) {}
  @HostListener('scroll', ['$event'])
  doSomething(event: any) {
    let winScroll = event.currentTarget.scrollTop;
    let height =
      event.currentTarget.scrollHeight - event.currentTarget.clientHeight;
    let scrolled = (winScroll / height) * 100;

    this.scrollProgressBarService.setScrollProgress(scrolled);
    // document.getElementById('scrollBar')!.style.width = scrolled + '%';
  }
}
