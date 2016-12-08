import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductsComponent } from './products.component';
import { HomeComponent } from './home.component';
// import { HeroesComponent }      from './heroes.component';
// import { HeroDetailComponent } from './hero-detail.component';

// import { Page1 } from './page1.component';




const routes: Routes = [
    {
        //path = rỗng khi vào trang vd. timdziec.com thì la path = rỗng thì nó sẽ load cái component TranHeroes( Tên export Class) của app.component.ts
        path: '',
        //pathmatch chưa hiểu

        redirectTo: '/home',

        pathMatch: "full"

    },
    {
        path: 'home',
        component: HomeComponent
    },
    {
        path: 'products',
        component: ProductsComponent
    }



];
@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }
