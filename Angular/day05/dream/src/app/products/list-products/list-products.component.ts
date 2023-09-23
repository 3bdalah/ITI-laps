import { Component } from '@angular/core';
import ProductsData from '../../../assets/products-list.json';
import { Product } from '../interface/product';
@Component({
  selector: 'app-list-products',
  templateUrl: './list-products.component.html',
  styleUrls: ['./list-products.component.css'],
})
export class ListProductsComponent {
  productslist: Product[] = ProductsData;
}
