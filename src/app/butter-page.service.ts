import { Injectable } from '@angular/core';
import { ButterPage } from '../app/butterpage';
import { Observable, throwError, of } from 'rxjs';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { catchError, tap, map, retry } from 'rxjs/operators';

const httpOptions = {
  headers: new HttpHeaders({'Content-Type': 'application/json'})
};
const apiUrl = 'https://buttercms-webapi.azurewebsites.net/api/CMS';

@Injectable({
  providedIn: 'root'
})
export class ButterPageService {

  constructor(private http: HttpClient) { }

  getButterPage(pageSlug: string): Observable<ButterPage> {
    const url = `${apiUrl}/${pageSlug}`;
    return this.http.get<ButterPage>(url)
    .pipe(
      retry(1),
      catchError(this.handleError<ButterPage>(`get ButterPage pageSlug=${pageSlug}`))
    );
  }

  getButterPagePreview(pageSlug: string): Observable<ButterPage> {
    const url = `${apiUrl}/${pageSlug}?preview=1`;
    return this.http.get<ButterPage>(url)
    .pipe(
      retry(1),
      catchError(this.handleError<ButterPage>(`get ButterPage pageSlug=${pageSlug}`))
    );
  }

  getButterPages(): Observable<ButterPage> {
    const url = `${apiUrl}` + '/pages?pageType=test_page&preview=0';
    return this.http.get<ButterPage>(url)
    .pipe(
      retry(1),
      catchError(this.handleError<ButterPage>(`get ButterPages`))
    );
  }

  findButterPages(keyWord: string): Observable<ButterPage> {
    const url = `${apiUrl}` + `/findpages?pageType=test_page&findBy=${keyWord}`;
    console.log(url);
    return this.http.get<ButterPage>(url)
    .pipe(
      retry(1),
      catchError(this.handleError<ButterPage>(`get ButterPages`))
    );
  }

  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {

      // TODO: send the error to remote logging infrastructure
      console.error(error); // log to console instead

      // Return an empty result
      return of(result as T);
    };
  }

}
