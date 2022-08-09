import { Component, OnInit } from '@angular/core';
import { ContentService } from '../shared/services/content.service';
import { Page } from '../shared/interfaces/page';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-full-page',
  templateUrl: './full-page.component.html',
  styleUrls: ['./full-page.component.css'],
})
export class FullPageComponent implements OnInit {
  page: Page = {
    title: 'empty title',
    subtitle: 'empty subtitle',
    content: 'empty content',
  };

  constructor(
    private contentService: ContentService,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    const pageData: string = this.route.snapshot.data['page'];
    this.page = this.contentService.getPage(pageData);
  }
}
