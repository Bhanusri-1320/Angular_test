import { Component } from '@angular/core';
import { ProductsService } from '../products.service';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatDividerModule } from '@angular/material/divider';
import { MatIconModule } from '@angular/material/icon';
import { ActivatedRoute } from '@angular/router';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-product-details',
  standalone: true,
  imports: [MatCardModule, MatButtonModule, MatDividerModule, MatIconModule],
  templateUrl: './product-details.component.html',
  styleUrl: './product-details.component.scss',
})
export class ProductDetailsComponent {
  Products: any = [
    {
      id: 'E001',
      name: 'Smartphone XYZ Pro',
      image:
        'https://m.media-amazon.com/images/I/314Rp+8XKWL._AC_SR300,300.jpg',
      price: '$899.99',
      description:
        'A high-end smartphone with a 6.7-inch display and top-notch performance.',
      quantity: 25,
    },
  ];
  arr: any = this.Products;
  // constructor(productService: ProductsService) {
  //   this.Products = productService.Products;
  //   console.log(this.Products);
  // }
  constructor(
    private productService: ProductsService,
    private route: ActivatedRoute, // DI
    private sanitizer: DomSanitizer
  ) {
    // let idx = this.route.snapshot.paramMap.get('id') || 0; // From URL
    // console.log(idx);
    // this.Movies = this.movieService.getMovieByIndex(+idx);
    // console.log(this.Movies);
    // this.trustedUrl = this.sanitizer.bypassSecurityTrustResourceUrl(
    //   this.Movies.trailer
    // );
  }
  ngOnInit() {
    let id = this.route.snapshot.paramMap.get('id') as string;
    this.productService.getProductsById(id).then((data: any) => {
      this.Products = data;
      this.arr.push(data);
    });
  }
}
