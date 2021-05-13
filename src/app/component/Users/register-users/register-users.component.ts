import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { DialogData } from '../login-users/login-users.component';

@Component({
  selector: 'app-register-users',
  templateUrl: './register-users.component.html',
  styleUrls: ['./register-users.component.css']
})
export class RegisterUsersComponent implements OnInit {
  options: FormGroup;
    hideRequiredControl = new FormControl(false);
    floatLabelControl = new FormControl('auto');


  constructor(
    public dialogRef: MatDialogRef<RegisterUsersComponent>,
    fb: FormBuilder,
    @Inject(MAT_DIALOG_DATA) public data: DialogData) 
    {
      console.log("RegisterUsersComponent",data);
      
    this.options = fb.group({
      hideRequired: this.hideRequiredControl,
      floatLabel: this.floatLabelControl,
    });
    }
 
  submit(){
    console.log("FormBuilder",this.options.value);
    
  }
  
  

  onNoClick(): void {
    this.dialogRef.close();
  }

  ngOnInit(): void {
  }

}
