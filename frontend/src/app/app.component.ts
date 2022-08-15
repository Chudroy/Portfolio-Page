import { OverlayContainer } from '@angular/cdk/overlay';
import { Component, HostBinding, OnInit } from '@angular/core';
import { DarkModeService } from './shared/services/dark-mode.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  lightClassName = 'my-light-theme';
  @HostBinding('class') className = '';
  constructor(
    private darkModeService: DarkModeService,
    private overlay: OverlayContainer
  ) {}

  ngOnInit(): void {
    this.darkModeService.darkMode$.subscribe((darkMode) => {
      this.className = darkMode ? '' : this.lightClassName;
      if (darkMode) {
        this.overlay
          .getContainerElement()
          .classList.remove(this.lightClassName);
      } else if (!darkMode) {
        this.overlay.getContainerElement().classList.add(this.lightClassName);
      }
    });
  }
}
