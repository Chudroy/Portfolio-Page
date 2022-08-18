import { Injectable } from '@angular/core';
import {
  HttpClient,
  HttpErrorResponse,
  HttpHeaders,
} from '@angular/common/http';

import { Observable, throwError } from 'rxjs';
import { catchError, retry, tap } from 'rxjs/operators';
import { Message } from '../interfaces/message';

@Injectable({
  providedIn: 'root',
})
export class SendMessageService {
  private messageUrl = 'http://localhost:3000/send-message';
  private res!: Message;

  constructor(private http: HttpClient) {}

  getCurrentMessage() {
    return this.http.get<any>(this.messageUrl).pipe(
      tap((msg) => {
        console.log(msg);
      }),
      catchError(this.handleError)
    );
  }

  sendMessage(messageObject: any) {
    const httpOptions = {
      observe: 'response' as const,
    };

    return this.http.post<any>(this.messageUrl, messageObject).pipe(
      tap((msg) => {
        console.log(msg);
      }),
      catchError(this.handleError)
    );
  }

  private handleError(error: HttpErrorResponse) {
    if (error.status === 0) {
      // A client-side or network error occurred. Handle it accordingly.
      console.error('An error occurred:', error.error);
    } else {
      // The backend returned an unsuccessful response code.
      // The response body may contain clues as to what went wrong.
      console.error(
        `Backend returned code ${error.status}, body was: `,
        error.error
      );
    }
    // Return an observable with a user-facing error message.
    return throwError(
      () => new Error('Something bad happened; please try again later.')
    );
  }
}
