import {Injectable} from '@angular/core';
import {Observable, throwError} from 'rxjs';
import {catchError, finalize, map, timeout} from 'rxjs/operators';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Router} from "@angular/router";

@Injectable()
export class HttpHelper {
  static numberOfRequest = 0;
  private timeOutTime = 60000;
  
  private baseUrl = 'https://reqres.in/';



  constructor(private httpClient: HttpClient,
               private router: Router) {
    localStorage.setItem('baseUrl',this.baseUrl);
}





  getHelper(url, pageIndex?, pageSize?, sortBy?, sortOrder?, filterBy?): Observable<any> {
    url = this.baseUrl + url;
    HttpHelper.numberOfRequest++;
   
  
   

    return this.httpClient.get(url).pipe(timeout(this.timeOutTime)).pipe(map(
      value => {
        return value;
      },
      error => {
       
      },
    )).pipe(finalize(() => {
      HttpHelper.numberOfRequest--;
      if (HttpHelper.numberOfRequest === 0) {
       
      }
    }));
  }


}
