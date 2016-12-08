import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';

import { ProductsComponent } from './products.component';
import { HomeComponent } from './home.component';

import { ProductService } from "./Services/Product.Service"

import { AppRoutingModule } from "./app-route.module"


//phải bỏ http vao đây
import { HttpModule } from '@angular/http';

@NgModule({
  imports: [BrowserModule, HttpModule, AppRoutingModule],
  declarations: [AppComponent, ProductsComponent,HomeComponent],
  bootstrap: [AppComponent],

})
export class AppModule { }
