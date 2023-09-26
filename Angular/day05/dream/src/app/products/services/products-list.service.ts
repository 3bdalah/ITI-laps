import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Product } from './../interface/product';
@Injectable({
  providedIn: 'root',
})
export class ProductsListService {
  urlAPI: string = 'https://dummyjson.com/products';
  urlAPIProductFullData: string = `${this.urlAPI}+'/'`;
  constructor(private http: HttpClient) {}

  getAllProducts() {
    return this.http.get<any>(this.urlAPI);
  }

  getDetailesProduct(productID: number) {
    console.log('product id number', productID);
    return this.http.get<any>(`https://dummyjson.com/products/${productID}`);
  }
}
