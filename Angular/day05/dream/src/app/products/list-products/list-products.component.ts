import { Component } from '@angular/core';
import ProductsData from '../../../assets/products-list.json';
import { Product } from '../interface/product';
import { ProductsListService } from '../services/products-list.service';
import { CartService } from '../services/cart.service';
@Component({
  selector: 'app-list-products',
  templateUrl: './list-products.component.html',
  styleUrls: ['./list-products.component.css'],
})
export class ListProductsComponent {
  productslist!: Product[];
  // showNotification = false;
  // notificationMessage = '';
  constructor(private productsService: ProductsListService) {}
  ngOnInit() {
    this.productsService.getAllProducts().subscribe((response) => {
      this.productslist = response.products;
      console.log(response.products);
    });
  }
}
