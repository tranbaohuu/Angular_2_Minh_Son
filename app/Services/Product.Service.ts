import { ProductsMock } from "../Mocks/Products.Mock"

import { ProductModel } from "../Models/Product.Model"




export class ProductService {





    GetAllProducts(): ProductModel[] {
        return ProductsMock;
    }


}