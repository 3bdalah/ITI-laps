import { Component } from '@angular/core';
import ProductsData from '../../../assets/products-list.json';

import { ActivatedRoute } from '@angular/router';
import { Product } from '../interface/product';
@Component({
  selector: 'app-single-product',
  templateUrl: './single-product.component.html',
  styleUrls: ['./single-product.component.css'],
})
export class SingleProductComponent {
  temp: any;
  productId!: number;
  productsList: Product[] = ProductsData;
  productFullData!: Product;

  constructor(private _ActivatRoute: ActivatedRoute) {}
  ngOnInit() {
    this.productId = +this._ActivatRoute.snapshot.params['id'];
    this.temp = this.productsList.find(
      (product) => product.id === this.productId
    );
    this.productFullData = this.temp;
  }
}
