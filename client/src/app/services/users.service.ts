import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

export interface Users{
  UserName:String;
  Email:String;
  Phone:String
}
@Injectable({
  providedIn: 'root'
})
export class UsersService {

  currentUser$: BehaviorSubject<Users> = new BehaviorSubject(JSON.parse(localStorage.getItem('currentUser')))
  arrayUsers: Users[] = []


  constructor() {
    this.arrayUsers = [
      { UserName: "chaim",  Email: "chaim@admin.com", Phone: "0521010100" },
    ]
   }
}
