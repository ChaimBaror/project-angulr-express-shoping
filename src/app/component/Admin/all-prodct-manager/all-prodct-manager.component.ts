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
  ELEMENT_DATA:ShopingCart[] = []

  displayedColumns: string[] = ['id', 'title', 'name', 'img','price','amount'];
  dataSource = new MatTableDataSource<ShopingCart>(this.ELEMENT_DATA);

  @ViewChild(MatPaginator) paginator: MatPaginator;
  constructor(private ShopingCartService: ShopingCartService) {
    this.ShopingCartService.getData()
    .then(result => {
      this.ELEMENT_DATA = result;
    })
    .catch(error => {
      console.log('Error Getting Data: ', error);
    });
   }

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  }


 

}
