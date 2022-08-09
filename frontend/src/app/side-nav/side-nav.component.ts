import { Component, Output, OnInit, EventEmitter } from '@angular/core';
import { AfterViewInit, ViewChild } from '@angular/core';
import { MatSidenav, MatSidenavContent } from '@angular/material/sidenav';
import { SideNavService } from '../shared/services/side-nav.service';
@Component({
  selector: 'app-side-nav',
  templateUrl: './side-nav.component.html',
  styleUrls: ['./side-nav.component.css'],
})
export class SideNavComponent implements OnInit {
  @ViewChild('sidenav') public sidenav!: MatSidenav;

  constructor(private sidenavService: SideNavService) {}

  ngOnInit(): void {}
  ngAfterViewInit(): void {
    this.sidenavService.setSidenav(this.sidenav);
  }
}
