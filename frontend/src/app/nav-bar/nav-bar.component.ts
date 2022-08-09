import { Component, OnInit } from '@angular/core';
import { SideNavService } from '../shared/services/side-nav.service';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css'],
})
export class NavBarComponent implements OnInit {
  constructor(private sideNav: SideNavService) {}

  ngOnInit(): void {}

  toggle() {
    this.sideNav.toggle();
  }
}
