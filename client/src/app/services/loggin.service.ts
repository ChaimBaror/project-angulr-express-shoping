import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { BehaviorSubject } from 'rxjs';
import { ApiHTTPService } from './api-http.service';
import { Users } from './users.service';



@Injectable({
  providedIn: 'root'
})
export class LogginService {
  currentUser$: BehaviorSubject<Users> = new BehaviorSubject(JSON.parse(localStorage.getItem('currentUser')))
  user: Users

  constructor(private _router: Router, private apiServer: ApiHTTPService) {
  }

  postUser(user: Users) {
    try {
      this.apiServer.requestBady(`/users`, 'POST', user);
      this.currentUser$.next(user)
      localStorage.setItem('currentUser', JSON.stringify(user));
      localStorage.setItem('loggedInToken', JSON.stringify(user.accessToken));
    } 
    catch (error) {
      console.log("error post" , error); 
    }
    
    // this._router.navigate(['/SignUn'])

  }
}
