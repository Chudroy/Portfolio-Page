import { Injectable } from '@angular/core';
import { Page, Pages } from '../interfaces/page';
@Injectable({
  providedIn: 'root',
})
export class ContentService {
  pages: Pages = {
    about: {
      title: 'About',
      subtitle: 'About Us',
      content: 'Some content about us.',
      image: 'assets/bg01.jpg',
    },
    work: {
      title: 'Work',
      subtitle: 'my work',
      content: 'Work done by me.',
      image: 'assets/bg00.jpg',
    },
    contact: {
      title: 'Contact',
      subtitle: 'Contact Us',
      content: 'How to contact us.',
      image: 'assets/bg02.jpg',
    },
  };
  constructor() {}
  getPage(pageData: string): Page {
    return this.pages[pageData as keyof Pages];
  }
}
