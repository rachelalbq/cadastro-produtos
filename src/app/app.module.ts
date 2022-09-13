import { RouterModule } from '@angular/router';
import { DEFAULT_CURRENCY_CODE, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TopBarComponent } from './components/top-bar/top-bar.component';
import {MenubarModule} from 'primeng/menubar';
import { InputTextModule } from 'primeng/inputtext';
import { ButtonModule } from 'primeng/button';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HomeComponent } from './components/home/home.component';
import { ProductService } from 'src/app/services/product.service';
import {RatingModule} from 'primeng/rating';

import {TableModule} from 'primeng/table';
import { NewProductComponent } from './components/new-product/new-product.component';
import {DialogModule} from 'primeng/dialog';
import {FileUploadModule} from 'primeng/fileupload';
import { LoginComponent } from './components/login/login.component';
import { EditProductComponent } from './components/edit-product/edit-product.component';
import { NgxMaskModule } from 'ngx-mask'
import {LOCALE_ID} from '@angular/core';
import { registerLocaleData } from "@angular/common";
import  localePt  from "@angular/common/locales/pt";

registerLocaleData(localePt, "pt")






@NgModule({
  declarations: [
    AppComponent,
    TopBarComponent,
    HomeComponent,
    NewProductComponent,
    LoginComponent,
    EditProductComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MenubarModule,
    InputTextModule,
    ButtonModule,
    BrowserAnimationsModule,
    FormsModule,
    HttpClientModule,
    TableModule,
    RatingModule,
    ReactiveFormsModule,
    DialogModule,
    FileUploadModule,
    RouterModule,
    NgxMaskModule.forRoot({
      dropSpecialCharacters: false // ao salvar mantem a mascara
    })


  ],
  providers: [
    ProductService,
    {
      provide: LOCALE_ID,
      useValue: 'pt-BR'
    },
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
