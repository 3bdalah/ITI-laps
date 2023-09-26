import { Component } from '@angular/core';
import { CartService } from 'src/app/products/services/cart.service';
// import { RouterLink } from '@angular/router';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent {
  counterItemsCart!: any;

  constructor(private ItemsFromcartServices: CartService) {}
  ngOnInit() {
    this.ItemsFromcartServices.getTotalItemsAtCart().subscribe((length) => {
      console.log('from header compenent', length);
      this.counterItemsCart = length;
    });
  }
}
