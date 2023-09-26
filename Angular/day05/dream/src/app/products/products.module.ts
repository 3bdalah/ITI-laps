import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListProductsComponent } from './list-products/list-products.component';
import { CardProductComponent } from './card-product/card-product.component';
import { SingleProductComponent } from './single-product/single-product.component';
import { CartComponent } from './cart/cart.component';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [
    ListProductsComponent,
    CardProductComponent,
    SingleProductComponent,
    CartComponent,
  ],
  imports: [CommonModule, SharedModule],
  exports: [
    ListProductsComponent,
    CardProductComponent,
    SingleProductComponent,
    CartComponent,
  ],
})
export class ProductsModule {}
