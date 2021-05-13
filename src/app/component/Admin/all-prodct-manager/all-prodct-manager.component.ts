import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { ShopingCart, ShopingCartService } from 'src/app/services/shoping-cart.service';
import {MatTableDataSource} from '@angular/material/table';

@Component({
  selector: 'app-all-prodct-manager',
  templateUrl: './all-prodct-manager.component.html',
  styleUrls: ['./all-prodct-manager.component.css']
})



export class AllProdctManagerComponent implements AfterViewInit  {
  products$;


  constructor(private ShopingCartService: ShopingCartService)  {}

  ngAfterViewInit() {
    this.products$=  this.ShopingCartService.getData()
  }



}
