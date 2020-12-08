import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { tap, shareReplay, catchError } from 'rxjs/operators';
import { Business } from '../models/business';

@Injectable({
  providedIn: 'root'
})
export class BusinessService {
  private apiRoot = '';

  constructor(private http: HttpClient) {}

  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      // TODO: send the error to remote logging infrastructure
      console.error(error); // log to console instead

      // TODO: better job of transforming error for user consumption
      console.log(`${operation} failed: ${error.message}`);

      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }

  createBusiness(name: string, occupants: number, location: string, contact: number, definition: string) {
    return this.http.post(this.apiRoot, { name,occupants,location,contact, definition }).pipe(
      tap((response) => {
        console.log('createBusiness response ', response);
      }),
      shareReplay()
    );
  }

 

  getBusiness(): Observable<Business[]> {
    return this.http.get<Business[]>(this.apiRoot).pipe(
      tap((_) => {
        console.log('fetched neighbourhoods');
      }),
      catchError(this.handleError<Business[]>('getBusiness', []))
    );
  }
  
}
