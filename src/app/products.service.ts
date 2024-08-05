import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ProductsService {
  Products: any;
  CartData: any;
  constructor() {
    fetch('https://66b0a8376a693a95b539a518.mockapi.io/Products')
      .then((res) => res.json())
      .then((data) => (this.Products = data));
  }
  getProducts() {
    return fetch('https://66b0a8376a693a95b539a518.mockapi.io/Products').then(
      (res) => res.json()
    );
  }
  getProductsById(id: any) {
    return fetch(
      `https://66b0a8376a693a95b539a518.mockapi.io/Products/${id}`
    ).then((res) => res.json());
  }
  deleteProduct(id: any) {
    return fetch(
      `https://66b0a8376a693a95b539a518.mockapi.io/Products/${id} `,
      {
        method: 'DELETE',
      }
    ).then((res) => res.json());
  }
  addingCart(product: any) {
    this.CartData.push(product);
  }
  gettingCart() {
    return this.CartData;
  }
}
