import { Component,ViewEncapsulation } from '@angular/core';


import { ProductsComponent } from './products.component';


@Component({
    selector: 'my-app',
    // template:`<list-products></list-products>`
    templateUrl: "app/app.component.html",
    // ViewEncapsulation.None làm cho css thằng cha hiểu ở các thằng con bên dưới, kế thừa sử dụng lại css, script
    encapsulation: ViewEncapsulation.None



    // <list-products></list-products>





})
export class AppComponent { }
