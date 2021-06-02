import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { BehaviorSubject, Observable, Subject } from 'rxjs';


export interface ShopingCart {
  id: string,
  title: string
  name: string,
  img: string,
  price: number,
  amount: number
}

@Injectable({
  providedIn: 'root'
})
export class ShopingCartService {
  ShopingCart: ShopingCart[] = [];
  listShopingCart$ = new BehaviorSubject<ShopingCart[]>(null);


  constructor(private http: HttpClient) { }
  getData() {
    return this.http.get<any[]>('assets/data.json').toPromise();
  }


  addToShopingCart(itme) {

    const { id, amount } = itme;
    const index = this.ShopingCart.findIndex(x => x.id === id);
    if (index == -1)
      this.ShopingCart.push(itme)
    else
      this.ShopingCart[index].amount = amount;

    this.listShopingCart$.next(this.ShopingCart)
  }

  getlistShopingCart(): Observable<any> {
    return this.listShopingCart$.asObservable();
  }

  rmoveItmeCart(itme) {
    const filteredShopingCart = this.ShopingCart.filter((item) => item.id !== itme.id);
    this.ShopingCart = filteredShopingCart;
    this.listShopingCart$.next(this.ShopingCart)
  }



}
