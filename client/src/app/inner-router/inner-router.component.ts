import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { SummaryComponent } from '../component/summary/summary.component';
import { ShopingCartService } from '../services/shoping-cart.service';
@Component({
  selector: 'app-inner-router',
  templateUrl: './inner-router.component.html',
  styleUrls: ['./inner-router.component.css']
})

export class InnerRouterComponent implements OnInit {

  public iconCart:boolean;
  arr = []
  constructor(public dialog: MatDialog,
    private ShopingCartService :ShopingCartService) {
    
    this.ShopingCartService.getlistShopingCart().subscribe(res =>{
      this.arr = res;
      this.iconCart = res == null ||  this.arr.length == 0  ? false : true; 
      console.log(" this.iconCart", this.iconCart);
  }
    )
  }
  openHelp(): void {
    const dialogRef = this.dialog.open(SummaryComponent);
    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });

  }


  ngOnInit(): void {
  }
 
  
  
}
