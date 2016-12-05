import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';

import { ProductsComponent } from './products.component';

import { ProductService } from "./Services/Product.Service"

//phải bỏ http vao đây
import { HttpModule } from '@angular/http';

@NgModule({
  imports: [BrowserModule, HttpModule],
  declarations: [AppComponent, ProductsComponent],
  bootstrap: [AppComponent]
})
export class AppModule { }
