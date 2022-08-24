import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { isDevMode } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class DownloadCurriculumService {
  curriculumUrl = isDevMode()
    ? 'http://localhost:3000/download-curriculum'
    : '/download-curriculum';
  constructor(private http: HttpClient) {}

  downloadCurriculum(language: string): Observable<any> {
    //set URL path for English or
    const url = `${this.curriculumUrl}/${language}`;
    //set headers to receive pdf file
    let headers = new HttpHeaders();
    headers = headers.set('Accept', 'application/pdf');

    return this.http.get(url, {
      headers: headers,
      responseType: 'blob',
    });
  }
}
