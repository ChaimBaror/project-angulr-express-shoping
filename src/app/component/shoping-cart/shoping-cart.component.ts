import { Component, OnInit } from '@angular/core';
import { Subscription, Observable } from 'rxjs';
import {
  ShopingCartService,
  ShopingCart,
} from './../../services/shoping-cart.service';

@Component({
  selector: 'app-shoping-cart',
  templateUrl: './shoping-cart.component.html',
  styleUrls: ['./shoping-cart.component.css'],
})
export class ShopingCartComponent implements OnInit {
  listShopingCart:ShopingCart[]
  price:number;
  tax:number;
  priceEndTax:number;
  subscription: Subscription;
  constructor(private ShopingCartService: ShopingCartService) {}

  ngOnInit(): void {
    this.subscription = this.ShopingCartService.getlistShopingCart()
    .subscribe(res => {
      this.price=0
      this.tax=0
      this.priceEndTax=0
      

      this.listShopingCart=res;
      console.log("  this.listShopingCart",  this.listShopingCart);
      this.listShopingCart.map((itme:ShopingCart)=>{
        this.price +=  itme.price*itme.amount;
        this.tax= this.price * 0.17
        this.priceEndTax=this.price+this.tax
      })
      
    });
  }

  updeteamount(id, key) {
    const itme = this.listShopingCart.filter((e) => e.id == id)[0];
    switch (key) {
      case 'ADD':
        itme.amount++;
        break;
      case 'MINS':
        itme.amount = itme.amount < 2 ? itme.amount : itme.amount - 1;
        break;
    }
    this.ShopingCartService.addToShopingCart(itme);
  }

  deleteItme(itme) {
    this.ShopingCartService.rmoveItmeCart(itme);
  }
  
  
  

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
}
