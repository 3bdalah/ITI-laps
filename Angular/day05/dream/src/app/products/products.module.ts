import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListProductsComponent } from './list-products/list-products.component';
import { CardProductComponent } from './card-product/card-product.component';
import { SingleProductComponent } from './single-product/single-product.component';

@NgModule({
  declarations: [
    ListProductsComponent,
    CardProductComponent,
    SingleProductComponent,
  ],
  imports: [CommonModule],
  exports: [
    ListProductsComponent,
    CardProductComponent,
    SingleProductComponent,
  ],
})
export class ProductsModule {}
