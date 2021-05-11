import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-order-summary',
  templateUrl: './order-summary.component.html',
  styleUrls: ['./order-summary.component.css']
})
export class OrderSummaryComponent implements OnInit {
  price:number;
  tax:number;
  priceEndTax:number;
  constructor() { }

  ngOnInit(): void {
  }

}
