import { Injectable } from '@angular/core';
import { Product } from '../interface/product';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class CartService {
  private cartItems: any[] = [];
  private totalPrice: number = 0;
  private countProducts: number = 0;
  private cartItemsSubject = new BehaviorSubject<any[]>([]);
  private cartLengthSubject = new BehaviorSubject<number>(0);
  private totalPriceCart = new BehaviorSubject<number>(0);
  private totalItems = new BehaviorSubject<number>(0);
  private messageSubject = new BehaviorSubject<string>('');
  private message = this.messageSubject.asObservable();
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
      if (this.checkFoundProduct.quantity < this.checkFoundProduct.stock) {
        this.checkFoundProduct.quantity++;
      }
    } else {
      let productWithQuantity: any = { ...productData, quantity: 1 };
      this.cartItems.push(productWithQuantity);
    }
    this.cartItemsSubject.next(this.cartItems);

    // this.showMessage('added New Product To Cart');
    console.log(
      'all items at subject cart ',
      this.cartItemsSubject.asObservable()
    );
    this.getTotalItemsAtCart();
  }
  InCreaseProduct(id: number) {
    const foundProduct = this.cartItems.find((product) => product.id === id);

    if (foundProduct) {
      if (foundProduct.quantity < foundProduct.stock) {
        foundProduct.quantity++;
        this.cartItemsSubject.next(this.cartItems);
        this.updateCartLength();
        this.getTotalPriceProducts();
        this.getTotalItemsAtCart();
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
        this.getTotalItemsAtCart();
      } else {
        foundProduct.quantity--;
        this.cartItemsSubject.next(this.cartItems);
        this.updateCartLength();
        this.getTotalPriceProducts();
        this.getTotalItemsAtCart();
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
    return this.totalPriceCart.asObservable();
  }

  getTotalItemsAtCart() {
    // this.totalItems = this.cartItems.length;
    this.countProducts = this.cartItems.reduce((curr, product) => {
      curr += product.quantity;
      return curr;
    }, 0);
    this.totalItems.next(this.countProducts);
    return this.totalItems.asObservable();
  }
  handleRemoveProduct(id: number) {
    this.cartItems = this.cartItems.filter((product) => product.id !== id);
    this.cartItemsSubject.next(this.cartItems);
    this.getTotalPriceProducts();
    this.getTotalItemsAtCart();
  }
  getAllProductsCart() {
    return this.cartItemsSubject.asObservable();
  }

  showMessage(message: string) {
    this.messageSubject.next(message);
  }
  hideMessage() {
    this.messageSubject.next('');
  }
}
