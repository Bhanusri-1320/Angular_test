import { Component } from '@angular/core';
import { ProductComponent } from '../product/product.component';
import { ProductsService } from '../products.service';
import { Route, Router } from '@angular/router';

@Component({
  selector: 'app-products',
  standalone: true,
  imports: [ProductComponent],
  templateUrl: './products.component.html',
  styleUrl: './products.component.scss',
})
export class ProductsComponent {
  isLoading: boolean = true;
  Products: any = [];
  editmovie: any;
  constructor(public productServie: ProductsService, private route: Router) {
    // console.log(this.movieServie.MoviesList);
  }
  ngOnInit() {
    this.loadMovies();
  }
  loadMovies() {
    this.productServie.getProducts().then((data: any) => {
      this.Products = data;
      this.isLoading = false;
    });
  }
}
