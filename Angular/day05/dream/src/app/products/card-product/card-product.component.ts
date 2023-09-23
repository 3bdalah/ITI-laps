import { Component, Input } from '@angular/core';
import { Product } from '../interface/product';
import { Router } from '@angular/router';
import { RouterLink } from '@angular/router';
@Component({
  selector: 'app-card-product',
  templateUrl: './card-product.component.html',
  styleUrls: ['./card-product.component.css'],
})
export class CardProductComponent {
  @Input() productData!: Product;

  constructor(private router: Router) {}

  openDetaliesProduct(id: number) {
    this.router.navigate(['products', id]);
  }
}
