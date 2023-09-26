import { Component } from '@angular/core';
import { Product } from '../interface/product';
import { CartService } from '../services/cart.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css'],
})
export class CartComponent {
  allProductsAddedAtCart: Product[] = [];
  totalPriceItemsCart: number = 0;
  constructor(private allProductsAtCart: CartService) {}
  ngOnInit() {
    this.allProductsAtCart.getAllProductsCart().subscribe((products) => {
      this.allProductsAddedAtCart = products;
    });

    this.allProductsAtCart.getTotalPriceProducts().subscribe((total) => {
      this.totalPriceItemsCart = total;
    });
  }
  decreaseQuantity(id: number) {
    this.allProductsAtCart.DeCreaseProduct(id);
  }
  inCreaseQuantity(id: number) {
    console.log('test clicked form cart component', id);
    this.allProductsAtCart.InCreaseProduct(id);
  }
  removeProductFromCart(id: number) {
    this.allProductsAtCart.handleRemoveProduct(id);
  }
  // console.log("products at cart component" , this.allProductsAddedAtCart);
}
