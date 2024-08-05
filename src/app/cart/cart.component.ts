import { Component } from '@angular/core';
import { ProductsService } from '../products.service';
import { ActivatedRoute } from '@angular/router';
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

  constructor(
    private productService: ProductsService,
    private route: ActivatedRoute, // DI
    private sanitizer: DomSanitizer
  ) {}
  ngOnInit() {
    this.Products = this.productService.gettingCart();
  }

  deleteProduct() {
    console.log('deleting..');
    this.productService.deleteProduct(this.Products.id);
  }
}
