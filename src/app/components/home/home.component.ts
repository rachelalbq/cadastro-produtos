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
    // private formBuilder: FormBuilder
    ) {
      this.products = [];
     }

  ngOnInit(): void {

    // this.formProduct = this.formBuilder.group({
    //   description_product: ['']
    // })


    // console.log(this.formProduct.get('description_product')?.value)

    this.productService.getProductsSmall()
    .subscribe({
      next: (response: any) => {
       if(response){
        this.productService.product = response.products
        this.productService.productLocal = JSON.parse(this.productService.productLocal)
        this.productService.product = [...this.productService.product, this.productService.productLocal]
        this.products = this.productService.product
        console.log(this.products)
       }
      },
      complete: () => {
        console.log('teste')
      }
    })

  }


  // this.productService.postNewProduct()
  // .subscribe({
  //   next:(response: any) => {
  //     if(response){
  //       console.log(response)
  //     }
  //   },
  //   complete: () => {
  //     console.log('teste2')
  //   }
  // })




  }





