import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { ShopingCartService ,ShopingCart} from './../services/shoping-cart.service';
@Component({
  selector: 'app-payment-page',
  templateUrl: './payment-page.component.html',
  styleUrls: ['./payment-page.component.css']
})
export class PaymentPageComponent implements OnInit {
  listShopingCart:ShopingCart[]
  subscription: Subscription;
  total:number;
  tax:number;
  priceEndTax:number;
  

  constructor(private ShopingCartService:ShopingCartService) { }

  ngOnInit(): void {
    this.subscription = this.ShopingCartService.getlistShopingCart()
    .subscribe(res => {
      this.total=0
      this.tax=0
      this.priceEndTax=0
      
      this.listShopingCart=res;
      this.listShopingCart.map((itme:ShopingCart)=>{
        this.total +=  itme.price*itme.amount;
        this.tax = this.total*0.17
        this.priceEndTax=this.total+this.tax
        
      })
      
    });
  

  }
  }


