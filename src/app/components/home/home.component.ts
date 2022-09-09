import { iProduct, iRoot } from './../../interface/product';
import { Component, OnInit } from '@angular/core';
import { ProductService } from 'src/app/services/product.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';




@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  products: iProduct[];
  binding!: string

  // formProduct!: FormGroup
  searchValue!: string






  constructor(
    private productService: ProductService,
    ) {
      this.products = [];
     }

  ngOnInit(): void {

        var products: iProduct[] = [];

        if (localStorage.getItem('products') !== null) {
          const parsed_products = JSON.parse(
            localStorage.getItem('products')!
          ) as iProduct[]

          parsed_products.forEach((product) => products.push(product))
        }

        console.log('FETCH PRODUCTS ', products)

        this.products = products;
       }





  getSearchProducts() {
    const validSearch = this.searchValue !== undefined && this.searchValue !== null && this.searchValue !== '';

    return validSearch ? this.products.filter(
      (obj) => obj.title.toLowerCase().includes(
        this.searchValue.toLowerCase()
      )
    ) : this.products;
  }


  deleteProduct(id: number){
    var products: iProduct[] = [];

    if (localStorage.getItem('products') !== null) {
      products = JSON.parse(
        localStorage.getItem('products')!
      ) as iProduct[]
    }

    this.products = products.filter((obj) => obj.id !== id)
    localStorage.setItem('products', JSON.stringify(this.products));

  }



  editProduct(id: number){
    console.log(1)
  }

  }





