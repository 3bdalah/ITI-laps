import { Component } from '@angular/core';
import ProductsData from '../../../assets/products-list.json';

import { ActivatedRoute, Router } from '@angular/router';
import { Product } from '../interface/product';
import { ProductsListService } from './../services/products-list.service';
import { CartService } from '../services/cart.service';
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
  // productsService: any;

  constructor(
    private router: Router,
    private _ActivatRoute: ActivatedRoute,
    private productsService: ProductsListService,
    private CartItems: CartService
  ) {}
  ngOnInit() {
    this.productId = +this._ActivatRoute.snapshot.params['id'];
    this.productsService
      .getDetailesProduct(this.productId)
      .subscribe((response: Product) => {
        console.log('detailess product data - >', response);
        this.productFullData = response;
      });
    // this.temp = this.productsList.find(
    //   (product) => product.id === this.productId
    // );
    // this.productFullData = this.temp;
  }
  handleToAddProductToCart(productFullData: Product) {
    this.CartItems.addProductToCart(productFullData);
    this.router.navigate(['cart']);
  }
}
