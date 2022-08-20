import { OverlayContainer } from '@angular/cdk/overlay';
import { Component, HostBinding, OnInit } from '@angular/core';
import { DarkModeService } from './shared/services/dark-mode.service';
import { Router } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';
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
    private overlay: OverlayContainer,
    private router: Router,
    private translateService: TranslateService
  ) {
    translateService.addLangs(['en', 'esp']);
    translateService.use('en');
  }

  ngOnInit(): void {
    this.router.navigate(['']);

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
