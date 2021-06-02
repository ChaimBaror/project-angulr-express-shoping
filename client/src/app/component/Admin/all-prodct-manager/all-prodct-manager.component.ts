import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { ShopingCart, ShopingCartService } from 'src/app/services/shoping-cart.service';
import {MatTableDataSource} from '@angular/material/table';
import { AddProdctComponent } from './../add-prodct/add-prodct.component';
import { MatDialog } from '@angular/material/dialog';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-all-prodct-manager',
  templateUrl: './all-prodct-manager.component.html',
  styleUrls: ['./all-prodct-manager.component.css']
})



export class AllProdctManagerComponent implements AfterViewInit  {
  products$;
  constructor(
    private ShopingCartService: ShopingCartService,
    private ProductService : ProductService,
    private dialog: MatDialog,
    ) {}
    AddProdct(){
      this.dialog.open(AddProdctComponent,{
        width: '270px',
      }) 
      }
   async getAllProdct(){
   this.products$ = await  this.ProductService.getAllProduct()
    }  

  ngAfterViewInit() {
    this.products$ =  this.ShopingCartService.getData()
  }
 



}
