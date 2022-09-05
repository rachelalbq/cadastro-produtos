import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { iRoot } from '../interface/product';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  status: string[] = ['OUTOFSTOCK', 'INSTOCK', 'LOWSTOCK'];

  productNames: string[] = []

  constructor(private http: HttpClient) { }

  getProductsSmall(data?: number) {
    return this.http.get<iRoot>('https://dummyjson.com/products')
}

}
