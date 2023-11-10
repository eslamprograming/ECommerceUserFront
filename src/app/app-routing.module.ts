import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from 'src/Sheard/Compontes/Login/Login.component';
import { RegisterComponent } from 'src/Sheard/Compontes/Register/Register.component';
import { SpinneerComponent } from 'src/Sheard/Compontes/Spinneer/Spinneer.component';
import { HomeProductsComponent } from 'src/product/Components/HomeProducts/HomeProducts.component';
import { ProductDetialsComponent } from 'src/product/Components/ProductDetials/ProductDetials.component';

const routes: Routes = [
  {path:'',component:HomeProductsComponent},
  {path:'Spinner',component:SpinneerComponent},
  {path:'ProductDetails',component:ProductDetialsComponent},
  {path:'Login',component:LoginComponent},
  {path:'Register',component:RegisterComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
