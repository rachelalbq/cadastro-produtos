import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
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
import { ModalUsersComponent } from './components/modal-users/modal-users.component';
import { LoginComponent } from './components/login/login.component';








@NgModule({
  declarations: [
    AppComponent,
    TopBarComponent,
    HomeComponent,
    NewProductComponent,
    ModalUsersComponent,
    LoginComponent,

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
    RouterModule


  ],
  providers: [ProductService],
  bootstrap: [AppComponent]
})
export class AppModule { }
