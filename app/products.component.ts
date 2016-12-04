import { Component } from '@angular/core';


import { OnInit } from '@angular/core';

import { ProductModel } from "./Models/Product.Model"

import { ProductService } from "./Services/Product.Service"


@Component({

    selector: "list-products",
    templateUrl: "app/products.component.html"
    , providers: [ProductService]


})
export class ProductsComponent implements OnInit {


    //delcare variable

    constructor(private ProductService: ProductService) {

    };


    listProducts: ProductModel[];


    //ng-On

    ngOnInit() {
        this.SetProductsToList();
    }


    //function 
    SetProductsToList(): void {
        this.listProducts = this.ProductService.GetAllProducts();

    }

}
