import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HeaderComponent } from './shared/header/header.component';
import { ListProductsComponent } from './products/list-products/list-products.component';
import { LogInComponent } from './auth/log-in/log-in.component';
import { SingleProductComponent } from './products/single-product/single-product.component';
import { NotFoundComponent } from './error/not-found/not-found.component';
import { SignUpComponent } from './auth/sign-up/sign-up.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

const routes: Routes = [
  { path: '', component: ListProductsComponent },
  { path: 'products', component: ListProductsComponent },
  { path: 'log-in', component: LogInComponent },
  { path: 'sign-up', component: SignUpComponent },
  { path: 'products/:id', component: SingleProductComponent },
  { path: '**', component: NotFoundComponent },
];

@NgModule({
  imports: [RouterModule, RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
