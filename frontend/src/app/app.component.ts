import { Component, HostBinding } from '@angular/core';
import { DarkModeService } from './shared/services/dark-mode.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  lightClassName = 'my-light-theme';
  @HostBinding('class') className = '';
  constructor(darkModeService: DarkModeService) {
    darkModeService.darkMode$.subscribe((darkMode) => {
      this.className = darkMode ? '' : this.lightClassName;
    });
  }
}
