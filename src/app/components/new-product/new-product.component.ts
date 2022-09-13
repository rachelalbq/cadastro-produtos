import { iProduct } from './../../interface/product';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Component, EventEmitter, OnInit, Output } from '@angular/core';


@Component({
  selector: 'app-new-product',
  templateUrl: './new-product.component.html',
  styleUrls: ['./new-product.component.scss']
})
export class NewProductComponent implements OnInit {

  @Output() close: EventEmitter<boolean> = new EventEmitter();
  formNewProduct!: FormGroup;
  file!: File




  constructor(private formBuilder: FormBuilder) { }


    ngOnInit(): void {
      this.formNewProduct = this.formBuilder.group({
        title: ['', Validators.required],
        price: ['', Validators.required],
        category: ['', Validators.required],

      })
    }

    closeModalNewProduct(){
      this.close.emit(false)
    }

    async saveNewProduct(){
      const image = await this.convertToBase64(this.file);

      let newProduct: iProduct= {
        title: this.formNewProduct.get('title')?.value,
        price: this.formNewProduct.get('price')?.value.replaceAll('.','').replaceAll(',','').replaceAll('R$ ', ''),
        category: this.formNewProduct.get('category')?.value,
        images: [image as string],
        id: Math.random() * 100,

      }

      var products: iProduct[] = [];

      if (localStorage.getItem('products') !== null) {
        products = JSON.parse(
          localStorage.getItem('products')!
          ) as iProduct[]
        }

        products.push(newProduct);

        localStorage.setItem('products', JSON.stringify(products));

        console.log(products)
        console.log(this.file)
      }

        fileChanges(event: any){
          this.file = event.currentFiles[0];
        }

      convertToBase64 (file: File){
        return new Promise((resolve, reject) => {
          const reader = new FileReader();
          reader.onload = () => resolve(reader.result);
          reader.onerror = reject;
          reader.readAsDataURL(file);
        });
      }
    }
