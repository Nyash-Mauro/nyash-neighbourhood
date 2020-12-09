import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { tap, shareReplay } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class LoginService {
  private apiRoot = 'https://hoodbe.herokuapp.com/api/v1/login/';

  constructor(private http: HttpClient) {}

  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {

      console.error(error);
       // log to console instead


      console.log(`${operation} failed: ${error.message}`);

      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }
  login(username: string, password: string) {
    return this.http.post(this.apiRoot, { username,password }).pipe(
      tap((response) => {
        console.log('Welcome to neighbourhood', response);
      }),
      shareReplay()
    );
  }
}