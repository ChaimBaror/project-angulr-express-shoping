import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Products, ProductService } from '../../../services/product.service'
@Component({
  selector: 'app-add-prodct',
  templateUrl: './add-prodct.component.html',
  styleUrls: ['./add-prodct.component.css']
})
export class AddProdctComponent implements OnInit {
  
  constructor(private fb : FormBuilder,
    private productService : ProductService) { }

  ngOnInit(): void {
  }

  addProdcut = this.fb.group({
    category: ['', [Validators.required]],
    title: ['', [Validators.required, Validators.minLength(2)]],
    text: ['', [Validators.required, Validators.minLength(2)]],
    price: ['', [Validators.required]],
    pictures: ['', [Validators.required,Validators.minLength(10)]],
    amount: ['', [Validators.required ]],
    active: [false, [Validators.required]],

  });

  submit() {
    const {category,title,text,price,pictures,amount,active} = this.addProdcut.value;
    const prodcut: Products = { 
    category:category,
    title :title,
    text :text, 
    price :price, 
    Pictures:pictures, 
    amount:amount, 
    active :active 
    }
    this.productService.AddProdct(prodcut)
  }
}
