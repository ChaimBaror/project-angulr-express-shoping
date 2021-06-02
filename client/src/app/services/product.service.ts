import { Injectable } from '@angular/core';
import { ApiHTTPService } from '../services/api-http.service'
 

export interface Products{
  id ?:String,
  category:String, 
  title :String,
  text :String,
  price :String,
  Pictures:String,
  amount:String,
  active :boolean
}

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private ApiHTTPService : ApiHTTPService) { }

  AddProdct(Product : Products){
    this.ApiHTTPService.requestBady("/products", "POST", Product ) 
  }
 getAllProduct(){
  return this.ApiHTTPService.request("/productsAll","GET")
   
  }
}
