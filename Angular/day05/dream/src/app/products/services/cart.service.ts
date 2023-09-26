import { Injectable } from '@angular/core';
import { Product } from '../interface/product';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class CartService {
  private cartItems: any[] = [];
  private totalPrice: number = 0;
  private cartItemsSubject = new BehaviorSubject<any[]>([]);
  private cartLengthSubject = new BehaviorSubject<number>(0);
  private totalPriceCart = new BehaviorSubject<number>(0);
  cartLengthItems = this.cartLengthSubject.asObservable();
  checkFoundProduct!: any;
  private updateCartLength() {
    this.cartLengthSubject.next(this.cartItems.length);
  }

  constructor() {}

  addProductToCart(productData: Product) {
    this.checkFoundProduct = this.cartItems.find(
      (product) => product.id === productData.id
    );
    if (this.checkFoundProduct) {
      this.checkFoundProduct.quantity++;
    } else {
      let productWithQuantity: any = { ...productData, quantity: 1 };
      this.cartItems.push(productWithQuantity);
    }
    console.log('cart items at service', this.cartItems);
    this.cartItemsSubject.next(this.cartItems);
    // console.log(
    //   'this cart items subject ',
    //   this.cartItemsSubject.asObservable()
    // );
    // console.log('all items at cart', this.cartItems);
    console.log(
      'all items at subject cart ',
      this.cartItemsSubject.asObservable()
    );
    // this.getAllProductsCart();
  }
  InCreaseProduct(id: number) {
    const foundProduct = this.cartItems.find((product) => product.id === id);

    if (foundProduct) {
      if (foundProduct.quantity < foundProduct.stock) {
        foundProduct.quantity++;
        this.cartItemsSubject.next(this.cartItems);
        this.updateCartLength();
        this.getTotalPriceProducts();
      }
    }
  }
  DeCreaseProduct(id: number) {
    const foundProduct = this.cartItems.find((product) => product.id === id);
    if (foundProduct) {
      if (foundProduct.quantity <= 1) {
        this.cartItems = this.cartItems.filter((product) => product.id != id);
        this.cartItemsSubject.next(this.cartItems);
        this.updateCartLength();
        this.getTotalPriceProducts();
      } else {
        foundProduct.quantity--;
        this.cartItemsSubject.next(this.cartItems);
        this.updateCartLength();
        this.getTotalPriceProducts();
      }
    }
  }

  getTotalPriceProducts() {
    this.totalPrice = this.cartItems.reduce((curr, product) => {
      console.log('current', curr, 'product', product);
      let summation = product.quantity * product.price;
      curr += summation;
      return curr;
    }, 0);
    this.totalPriceCart.next(this.totalPrice);
    console.log('total price cart', this.totalPriceCart.asObservable());
    return this.totalPriceCart.asObservable();
  }
  getAllProductsCart() {
    return this.cartItemsSubject.asObservable();
  }
}
