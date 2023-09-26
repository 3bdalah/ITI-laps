import { Component } from '@angular/core';
import { CartService } from 'src/app/products/services/cart.service';
// import { RouterLink } from '@angular/router';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent {
  counterItemsCart: number = 0;
  constructor(private cartcounterItems: CartService) {}
  ngOnInit() {
    // this.cartcounterItems.getAllItemsCounterAtCart().subscribe((length) => {
    //   console.log('length items ', length);
    //   this.counterItemsCart = length;
    // });
    // this.cartItemsLength.getAllProductsCart.subscribe((length) => {
    //   this.counterItemsCart = length;
    // });
  }
}
