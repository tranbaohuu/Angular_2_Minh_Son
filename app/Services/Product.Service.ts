import { Injectable } from '@angular/core';


import { ProductsMock } from "../Mocks/Products.Mock"

import { ProductModel } from "../Models/Product.Model"

import { Headers, Http } from '@angular/http';
import 'rxjs/add/operator/toPromise';

import { Observable } from 'rxjs/Observable';
//dùng để lấy hàm map rxjs = reactextension js

import 'rxjs/Rx';

@Injectable()
export class ProductService {



    constructor(private http: Http) { };

    GetAllProducts(): Promise<ProductModel[]> {

        return this.http.get("http://localhost:21481/api/sanphams")
            .toPromise()
            .then(response => response.json().data as ProductModel[])
            .catch(this.handleError);

        // return ProductsMock;
    }



    GetAllProductsNormal(){
        return this.http.get("http://localhost:21481/api/sanphams")
            .map(response => <ProductModel[]>response.json());
        // return ProductsMock;
    }


    private handleError(error: any): Promise<any> {
        console.error('An error occurred', error); // for demo purposes only
        return Promise.reject(error.message || error);
    }



}