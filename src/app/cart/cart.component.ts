import { Component } from '@angular/core';
import { ProductsService } from '../products.service';
import { ActivatedRoute, Route, Router } from '@angular/router';
import { DomSanitizer } from '@angular/platform-browser';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatDividerModule } from '@angular/material/divider';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-cart',
  standalone: true,
  imports: [MatCardModule, MatButtonModule, MatDividerModule, MatIconModule],
  templateUrl: './cart.component.html',
  styleUrl: './cart.component.scss',
})
export class CartComponent {
  Products: any;
  ProductsList = [];
  constructor(
    private productService: ProductsService,
    private route: ActivatedRoute, // DI
    private sanitizer: DomSanitizer,
    private router: Router
  ) {}
  ngOnInit() {
    this.ProductsList = this.productService.gettingCart();
    // for (let Product of this.ProductsList) {
    //   this.Products = Product;
    // }
    console.log(this.ProductsList[0]);
    this.Products = this.ProductsList[0];
    // this.Products = this.productService.gettingCart();
  }
  deleteProduct() {
    console.log('deleting..');
    this.productService.deleteProduct(this.Products.id);
  }
  orders() {
    this.router.navigate([`orders`]);
  }
}
