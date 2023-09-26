import { Component, Input } from '@angular/core';
import { Product } from '../interface/product';
import { Router } from '@angular/router';
import { RouterLink } from '@angular/router';
import { CartService } from '../services/cart.service';
@Component({
  selector: 'app-card-product',
  templateUrl: './card-product.component.html',
  styleUrls: ['./card-product.component.css'],
})
export class CardProductComponent {
  @Input() productData!: any;

  constructor(private router: Router, private cartItems: CartService) {}

  // addProductToCart(product: Product) {
  //   this.cartItems.addProductToCart(product);
  //   this.router.navigate(['cart']);
  // }

  AddToProductToCartFromCard(productInfo: Product) {
    this.cartItems.addProductToCart(productInfo);
    this.router.navigate(['cart']);
  }
  openDetaliesProduct(id: number) {
    this.router.navigate(['products', id]);
  }
}
