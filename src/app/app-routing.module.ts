import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CartComponent } from './cart/cart.component';
import { ConfirmationComponent } from './confirmation/confirmation.component';
import { ProductDetailsComponent } from './product-details/product-details.component';
import { ProductListComponent } from './product-list/product-list.component';

const routes: Routes = [
  
  {
    path: 'product/:id',component: ProductDetailsComponent
  },
  {
    path: '',component: ProductListComponent
  },
  {
    path: 'cart', component: CartComponent
  },
  {
    path: 'confirmation', component:ConfirmationComponent
  },
  {path: '**', redirectTo: '/'}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
