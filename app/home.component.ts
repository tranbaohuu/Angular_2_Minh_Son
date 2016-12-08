import { Component ,OnInit} from '@angular/core';



import { ProductModel } from "./Models/Product.Model";

import { ProductService } from "./Services/Product.Service";




@Component({

    selector: "list-products",
    templateUrl: "app/home.component.html"


})
export class HomeComponent  {


    // //delcare variable

    // constructor(private ProductService: ProductService) {

    // };


    // // listProducts: Promise<ProductModel[]>;
    // listProducts: ProductModel[];


    // //ng-On

    // ngOnInit() {
    //     this.SetProductsToList();
    // }


    // //function 
    // SetProductsToList(): void {
    //    this.ProductService.GetAllProductsNormal().subscribe(products=>this.listProducts = products);

    // }

}
