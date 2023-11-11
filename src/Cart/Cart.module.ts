import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CartComponent } from './Cart.component';
import { FormsModule } from '@angular/forms';
import { CartDetailsComponent } from './Component/CartDetails/CartDetails.component';

@NgModule({
  imports: [
    CommonModule,FormsModule
  ],
  declarations: [CartComponent,CartDetailsComponent],
  exports:[CartDetailsComponent]
})
export class CartModule { }
