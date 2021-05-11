import { Component, OnInit } from '@angular/core';
import { ShopingCartService } from '../services/shoping-cart.service';
import { TranslocoService } from '@ngneat/transloco';
import { LoginUsersComponent } from '../component/Users/login-users/login-users.component';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent  {
  public iconCart:boolean;
   arr = []

  headlines
  constructor(private ShopingCartService :ShopingCartService,
    public dialog: MatDialog,
    private service: TranslocoService,
    ) { 
     this.ShopingCartService.getlistShopingCart().subscribe(res =>{
          this.arr = res;
          this.iconCart = res == null ||  this.arr.length == 0  ? false : true; 
          console.log(" this.iconCart", this.iconCart);  

    })
  }

  change(lang: string) {
    this.service.setActiveLang(lang);
  }

  openDialogLogin(): void {
    const dialogRef = this.dialog.open(LoginUsersComponent);
    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
}

}

