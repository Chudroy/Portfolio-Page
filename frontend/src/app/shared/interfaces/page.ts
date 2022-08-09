export interface Pages {
  about: Page;
  work: Page;
  contact: Page;
}

export interface Page {
  title: string;
  subtitle: string;
  content: string;
  image?: string;
}
