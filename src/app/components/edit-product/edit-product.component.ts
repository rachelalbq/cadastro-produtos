import { Component, EventEmitter, Input, OnInit, Output, OnChanges, SimpleChange, SimpleChanges } from '@angular/core';
import { iProduct } from './../../interface/product';
import { FormGroup, FormBuilder, Validators, FormControlName, FormControl } from '@angular/forms';


@Component({
  selector: 'app-edit-product',
  templateUrl: './edit-product.component.html',
  styleUrls: ['./edit-product.component.scss']
})
export class EditProductComponent implements OnChanges{

  @Input() produto: iProduct | undefined
  @Output() close: EventEmitter<boolean> = new EventEmitter();
  product!: iProduct[]
  newProduct!: iProduct
  formProduct!: FormGroup
  file!: File

  constructor(
    private formBuilder: FormBuilder,
    ) { }



    closeModalEditProduct(){
      this.close.emit(false)
    }

    ngOnChanges(changes: SimpleChanges): void {
      this.formProduct = this.formBuilder.group({
        title: this.produto?.title,
        price: this.produto?.price,
        category: this.produto?.category,
        images: this.produto?.images
      })

    }

    async editProduct(){

      var products: iProduct[] = [];

      if (localStorage.getItem('products') !== null) {
        const parsed_products = JSON.parse(
          localStorage.getItem('products')!
        ) as iProduct[]

        parsed_products.forEach((product) => products.push(product))
      }

      const image = await this.convertToBase64(this.file)

      console.log(this.produto?.images)
      let productEdit: any = {
        title: this.formProduct.get('title')?.value,
        price: this.formProduct.get('price')?.value.replaceAll('.','').replaceAll(',','').replaceAll('R$ ', ''),
        category: this.formProduct.get('category')?.value,
        images: [image]
      };

      const index = products.findIndex((product) => product.id === this.produto?.id)
      if(index === -1){
        return
      }

      const product = {
        ...products[index], ...productEdit
      }

      products[index] = product

      localStorage.setItem('products', JSON.stringify(products));
      this.closeModalEditProduct()
      location.reload();
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
