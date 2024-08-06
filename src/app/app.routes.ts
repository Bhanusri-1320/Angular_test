import { Routes } from '@angular/router';
import { ProductsComponent } from './products/products.component';
import { ProductDetailsComponent } from './product-details/product-details.component';
import { CartComponent } from './cart/cart.component';
import { ErrorComponent } from './error/error.component';
import { OrdersComponent } from './orders/orders.component';
import { CartNewComponent } from './cart-new/cart-new.component';

export const routes: Routes = [
  {
    path: '',
    component: ProductsComponent,
  },
  {
    path: ':id',
    component: ProductDetailsComponent,
  },
  {
    path: 'cart',
    component: CartComponent,
  },

  {
    path: '**',
    component: ErrorComponent,
  },
];
