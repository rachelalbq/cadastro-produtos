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
        this.products = response.products
       }
      },
      complete: () => {
        console.log('teste')
      }
    })
  }





  }





