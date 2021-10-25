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
    const url = 'api/users?page=2';
    return this.httpHelper.getHelper(url);
  }

}
