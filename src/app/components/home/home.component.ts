import { iProduct } from './../../interface/product';
import { Component, OnInit } from '@angular/core';





@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  products!: iProduct[];
  binding!: string
  display: boolean = false;
  currentEditor?: iProduct;
  searchValue!: string



  constructor() {}

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


            editProduct(product: iProduct){
              this.display = true;
              this.currentEditor = product;
            }

            closeModal(e: any){
              this.display = e
            }
            getCurrentEditor() {
              return this.currentEditor;
            }
          }





