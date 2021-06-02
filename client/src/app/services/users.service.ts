import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { BehaviorSubject } from 'rxjs';
import { ApiHTTPService } from './api-http.service';

export interface Users {
  name: String;
  email: String;
  PhoneNumber: String;
  accessToken?: any
}
@Injectable({
  providedIn: 'root'
})
export class UsersService {

  currentUser$: BehaviorSubject<Users> = new BehaviorSubject(JSON.parse(localStorage.getItem('currentUser')))
  user: Users
  arrayUsers: Users[] = []


  constructor(private _router: Router, private apiServer: ApiHTTPService) {
    this.arrayUsers = [
      { name: "chaim", email: "chaim@admin.com", PhoneNumber: "0521010100" },
    ]
  }

  UserExist(email: String) {
    this.apiServer.requestBady(`/usersEmail`, 'POST', email);

  }

  postUser(user: Users) {
    try {
      this.apiServer.requestBady(`/users`, 'POST', user);
      // this.currentUser$.next(user)
      localStorage.setItem('currentUser', JSON.stringify(user));
      localStorage.setItem('loggedInToken', JSON.stringify(user.accessToken));
    }
    catch (error) {
      console.log("error post", error);
    }

    // this._router.navigate(['/SignUn'])

  }

}
