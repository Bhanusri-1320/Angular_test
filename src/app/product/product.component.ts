import { Component, EventEmitter, Input, Output } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { MatDividerModule } from '@angular/material/divider';
import { MatButtonModule } from '@angular/material/button';
import { Route, Router, RouterLink } from '@angular/router';
import { ProductsService } from '../products.service';

@Component({
  selector: 'app-product',
  standalone: true,
  imports: [
    MatCardModule,
    MatButtonModule,
    MatDividerModule,
    MatIconModule,
    RouterLink,
  ],
  templateUrl: './product.component.html',
  styleUrl: './product.component.scss',
})
export class ProductComponent {
  constructor(private productService: ProductsService, private route: Router) {}
  @Input() product: any = {
    id: 'E001',
    name: 'Smartphone XYZ Pro',
    image: 'https://m.media-amazon.com/images/I/314Rp+8XKWL._AC_SR300,300.jpg',
    price: '$899.99',
  };
  @Input() id: any;
  @Output() cartEvent = new EventEmitter<any>();
  cart() {
    console.log('cart container..');
    //this.cartEvent.emit(this.product);
    this.productService.addingCart(this.product);
  }
}
