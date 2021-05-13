import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { RegisterUsersComponent } from '../register-users/register-users.component';

export interface DialogData {
  email: string;
  name: string;
}

@Component({
  selector: 'app-login-users',
  templateUrl: './login-users.component.html',
  styleUrls: ['./login-users.component.css']
})
export class LoginUsersComponent implements OnInit {

  constructor(public dialog: MatDialog,) { }

  ngOnInit(): void {
  }
  email = new FormControl('', [Validators.required, Validators.email]);

  getErrorMessage() {
    if (this.email.hasError('required')) {
      return 'You must enter a value';
    }

    return this.email.hasError('email') ? 'Not a valid email' : '';
  }


  submit(){
    console.log("emailFormControl",this.email.value);
    this.dialog.open(RegisterUsersComponent,{
      // width: '250px',
      data: {email: this.email.value }
    })
  }

}
