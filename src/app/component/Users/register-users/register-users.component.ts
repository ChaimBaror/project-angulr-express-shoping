import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { DialogData } from '../login-users/login-users.component';
import { UsersService } from '../../../services/users.service'

@Component({
  selector: 'app-register-users',
  templateUrl: './register-users.component.html',
  styleUrls: ['./register-users.component.css']
})

export class RegisterUsersComponent implements OnInit {
  public UserExist;
  private code;
  authentication=false


  constructor(
    public dialogRef: MatDialogRef<RegisterUsersComponent>,
    private fb: FormBuilder,
    private UsersService: UsersService,
    @Inject(MAT_DIALOG_DATA) public data: DialogData) {
    this.UserExist = this.UsersService.arrayUsers.findIndex(Users => Users.Email == this.data.email)

    console.log("this.UserExist", this.UserExist);

  }

  ngOnInit(): void {

  }

  options = this.fb.group({
    Email: [this.data.email, [Validators.required, Validators.pattern('^[a-zA-Z][a-zA-Z0-9_\.]+@[a-z0-9]{2,}(\.[a-z0-9]{2,4}){1,}$')]],
    UserName: ['', [Validators.required, Validators.minLength(2)]],
    PhoneNumber: ['', [Validators.required, Validators.pattern('0[0-9\s.-]{5,13}')]],
  });

  submit() {
    console.log("FormBuilder", this.options.value);
  }

  onNoClick(): void {
    this.dialogRef.close();
  }

  codeSendAuthentication(){
    if(this.code==1234)
    this.authentication=true;
    
  }


}
