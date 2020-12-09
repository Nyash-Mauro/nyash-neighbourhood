import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { tap, catchError, shareReplay } from 'rxjs/operators';
import {Neighbourhood} from 'src/app/models/neighbourhood';

@Injectable({
  providedIn: 'root'
})
export class NeighbourhoodService {
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

  createNeighbourhood(name: string, occupants: number, location: string, contact: number, definition: string,admin:number) {
    return this.http.post(this.apiRoot, { name,occupants,location,contact, definition,admin }).pipe(
      tap((response) => {
        console.log('createNeighbourhood response ', response);
      }),
      shareReplay()
    );
  }

 

  getNeighbourhoods(): Observable<Neighbourhood[]> {
    return this.http.get<Neighbourhood[]>(this.apiRoot).pipe(
      tap((_) => {
        console.log('fetched neighbourhoods');
      }),
      catchError(this.handleError<Neighbourhood[]>('getNeighbourhods', []))
    );
  }
  
}
