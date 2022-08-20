import { Component } from '@angular/core';
import { MediaMatcher } from '@angular/cdk/layout';
import { ChangeDetectorRef, OnDestroy } from '@angular/core';
import { Location } from '@angular/common';
import { DarkModeService } from '../shared/services/dark-mode.service';
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.css'],
})
export class NavigationComponent implements OnDestroy {
  mobileQuery: MediaQueryList;

  moonIcon = 'fa-solid fa-moon fa-xl ';
  sunIcon = 'fas fa-sun fa-xl';
  iconClass = this.moonIcon;

  private _mobileQueryListener: () => void;

  constructor(
    changeDetectorRef: ChangeDetectorRef,
    media: MediaMatcher,
    private location: Location,
    private darkModeService: DarkModeService,
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private translateService: TranslateService
  ) {
    this.mobileQuery = media.matchMedia('(max-width: 600px)');
    this._mobileQueryListener = () => changeDetectorRef.detectChanges();
    this.mobileQuery.addListener(this._mobileQueryListener);
  }

  ngOnDestroy(): void {
    this.mobileQuery.removeListener(this._mobileQueryListener);
  }

  scroll(url: string) {
    const scrollTo = document.getElementById(url);
    scrollTo?.scrollIntoView({ behavior: 'smooth' });

    const newUrl = this.router
      .createUrlTree([url], {
        relativeTo: this.activatedRoute,
      })
      .toString();

    this.location.go(newUrl);
  }

  toggleDarkMode($event: any) {
    this.darkModeService.toggleDarkMode();
    if (this.iconClass == this.moonIcon) {
      this.iconClass = this.sunIcon;
    } else if (this.iconClass == this.sunIcon) {
      this.iconClass = this.moonIcon;
    }
  }

  changeLanguage(language: string) {
    this.translateService.use(language);
  }
}
