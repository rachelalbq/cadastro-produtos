import { iProduct } from './../interface/product';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { iRoot } from '../interface/product';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  status: string[] = ['OUTOFSTOCK', 'INSTOCK', 'LOWSTOCK'];

  productNames: string[] = [];

  product!: any;
  newProducts!: any;
  productLocal!: any;

  constructor
  (private http: HttpClient,) { }

  getProductsSmall(data?: number) {
  this.productLocal = localStorage.getItem('newProduct')
  return this.http.get<iRoot>('https://dummyjson.com/products')


}

  postNewProduct(){
    console.log(this.product)


  }

}
