import { ProductService } from 'src/app/services/product.service';
import { iProduct } from './../../interface/product';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { TitleStrategy } from '@angular/router';

@Component({
  selector: 'app-new-product',
  templateUrl: './new-product.component.html',
  styleUrls: ['./new-product.component.scss']
})
export class NewProductComponent implements OnInit {

  @Output() close: EventEmitter<boolean> = new EventEmitter();
  formNewProduct!: FormGroup;



  constructor(
    private formBuilder: FormBuilder,
    private productService: ProductService
    ) { }


  ngOnInit(): void {
    this.formNewProduct = this.formBuilder.group({
      name: ['', Validators.required],
      price: ['', Validators.required],
      category: ['', Validators.required],

    })
  }

  closeModalNewProduct(){
    this.close.emit(false)
  }

  saveNewProduct(){
    const newProduct = {
      title: this.formNewProduct.get('name')?.value,
      price: this.formNewProduct.get('price')?.value,
      category: this.formNewProduct.get('category')?.value,
      images: ['https://dummyjson.com/image/i/products/30/1.jpg']
    }




    localStorage.setItem('newProduct', JSON.stringify(newProduct));


  }
}
