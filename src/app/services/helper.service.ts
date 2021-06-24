import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';
import { ErrorResponse } from './models';

@Injectable({
  providedIn: 'root',
})
export class HelperService {
  base = 'https://api.hoolicash.cf/api';

  constructor(private http: HttpClient) {}

  private handleError(error: HttpErrorResponse) {
    if (error.status === 0) {
      // A client-side or network error occurred. Handle it accordingly.
      console.error('An error occurred:', error.error);
    } else {
      // The backend returned an unsuccessful response code.
      // The response body may contain clues as to what went wrong.
      console.error(`Backend returned code ${error.status}, ` + `body was: ${error.error}`);
    }
    // Return an observable with a user-facing error message.
    return throwError(error.error);
  }

  request<R>(method: string, url: string, data: any, auth = true) {
    let options: any = {
      'Content-Type': 'application/json',
    };
    if (auth) {
      options.Authorization = localStorage.getItem('token');
    }

    return this.http
      .request<R>(method, this.base + url, {
        body: data,
        headers: new HttpHeaders(options),
      })
      .pipe(catchError(this.handleError));
  }
}
