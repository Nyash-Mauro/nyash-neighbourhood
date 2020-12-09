import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { tap, catchError } from 'rxjs/operators';
import { Admin } from '../models/admin';


@Injectable({
  providedIn: 'root'
})
export class ProfileService {
  private apiRoot = '';

  constructor(private http: HttpClient) {}

  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      console.error(error); 

      console.log(`${operation} failed: ${error.message}`);

      
      return of(result as T);
    };
  }

  getAdminProfile(): Observable<Admin[]> {
    return this.http.get<Admin[]>(this.apiRoot).pipe(
      tap((_) => {
        console.log('fetched profile');
      }),
      catchError(this.handleError<Admin[]>('getAdminProfile', []))
    );
  }
 
}
