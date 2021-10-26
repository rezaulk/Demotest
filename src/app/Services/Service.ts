import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';
import {HttpHelper} from '../helper/httpHelper';

@Injectable({
  providedIn: 'root'
})

export class UserService {
  constructor(private httpHelper: HttpHelper) {
  }

  getUserList(): Observable<any> {
    const url = 'api/City/GetAllCities';
    return this.httpHelper.getHelper(url);
  }

  getCountryList(): Observable<any> {
    const url = 'api/Country/GetAllCountry';
    return this.httpHelper.getHelper(url);
  }

}
