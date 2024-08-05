import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ProductsService {
  Products: any;
  CartData: any = [];
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
  // addingCart(product: any) {
  //   console.log(product);
  //   this.CartData.push(product);
  //   console.log(this.CartData);
  // }
  addingCart(product: any) {
    // this.movies.push(newMovie);
    // this.CartData.push(product);
    const cart = JSON.parse(localStorage.getItem('cart') || '[]');
    const existingProductIndex = cart.findIndex(
      (item: { id: any }) => item.id === product.id
    );

    if (existingProductIndex >= 0) {
      // Product already in cart, increment quantity
      cart[existingProductIndex].quantity += 1;
    } else {
      // Add new product to cart
      product.quantity = 1; // Initialize quantity
      cart.push(product);
    }
  }
  gettingCart() {
    console.log(this.CartData);
    return this.CartData;
  }
}
