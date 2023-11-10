import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductComponent } from './product.component';
import { HomeProductsComponent } from './Components/HomeProducts/HomeProducts.component';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { ProductDetialsComponent } from './Components/ProductDetials/ProductDetials.component';

@NgModule({
  imports: [
    CommonModule,FormsModule,RouterModule,HttpClientModule
  ],
  declarations: [ProductComponent,HomeProductsComponent,ProductDetialsComponent],
  exports:[HomeProductsComponent,ProductDetialsComponent]
})
export class ProductModule { }
