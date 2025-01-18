import { Routes } from '@angular/router';
import { BoardingComponent } from './component/boarding/boarding.component';
import { LoginComponent } from './component/login/login.component';
import { SignupComponent } from './component/signup/signup.component';
import { MainComponent } from './component/main/main.component';
import { ProductDetailsComponent } from './component/product-details/product-details.component';
import { MyCartComponent } from './component/my-cart/my-cart.component';
import { FavoritesComponent } from './component/favorites/favorites.component';

export const routes: Routes = [
    { path: '', component: BoardingComponent },
    { path: 'login', component: LoginComponent },
    { path: 'signup', component: SignupComponent },
    { path: 'main', component: MainComponent },
    { path: 'product-details', component: ProductDetailsComponent },
    { path: 'my-cart', component: MyCartComponent },
    { path: 'favorites', component: FavoritesComponent },
];
