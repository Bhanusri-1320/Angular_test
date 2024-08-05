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
  Products: any = {
    // id: 'E001',
    // name: 'Smartphone XYZ Pro',
    // image: 'https://m.media-amazon.com/images/I/314Rp+8XKWL._AC_SR300,300.jpg',
    // price: '$899.99',
    // description:
    //   'A high-end smartphone with a 6.7-inch display and top-notch performance.',
    // quantity: 25,
  };
  ProductsList: any = [];
  constructor(
    private productService: ProductsService,
    private route: ActivatedRoute, // DI
    private sanitizer: DomSanitizer,
    private router: Router
  ) {}

  // ngOnInit() {
  //   this.ProductsList = this.productService.gettingCart();
  //   this.ProductsList.map((data) => this.Products.patchValue(data));
  //   // for (let Product of this.ProductsList) {
  //   //   this.Products = Product;
  //   // }
  //   // console.log(this.ProductsList);
  //   // console.log(this.ProductsList[0]);
  //   // this.Products = this.ProductsList[0];
  //   // this.Products = this.productService.gettingCart();
  // }
  ngOnInit() {
    this.ProductsList = this.productService.gettingCart();
    // for (let Product of this.ProductsList) {
    //   this.Products = Product;
    // }
    // console.log(this.ProductsList[0]);
    this.Products.patchValue(this.ProductsList[0]);
    // this.Products = this.productsService.gettingCart();
  }
  deleteProduct() {
    console.log('deleting..');
    // this.productService.deleteProduct(this.Products.id);
  }
  orders() {
    this.router.navigate([`orders`]);
  }
}
