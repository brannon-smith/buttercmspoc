import { Injectable } from '@angular/core';
import { ButterPage } from '../butterpage';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError, of } from 'rxjs';
import { catchError, tap, map, retry } from 'rxjs/operators';
// import 'rxjs/add/operator/map';

const apiUrl = 'https://buttercms-webapi.azurewebsites.net/api/CMS';

@Injectable({
  providedIn: 'root'
})
export class SearchService {

  constructor(private http: HttpClient) { }

  search(queryString: string) {
    const url = apiUrl + queryString;
    return this.http.get(url);
  }

  // getButterPages(): Observable<ButterPage> {
  //   const url = `${apiUrl}` + '/pages?pageType=test_page&preview=0';
  //   return this.http.get<ButterPage>(url)
  //   .pipe(
  //     retry(1),
  //     catchError(this.handleError<ButterPage>(`get ButterPages`))
  //   );
  // }

  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {

      // TODO: send the error to remote logging infrastructure
      console.error(error); // log to console instead

      // Return an empty result
      return of(result as T);
    };
  }
}
