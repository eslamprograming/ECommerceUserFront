import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProductModule } from 'src/product/product.module';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { SheardModule } from 'src/Sheard/Sheard.module';
import { TokenInterceptorService } from 'src/interceptor/interceptor.service';
import { CartModule } from 'src/Cart/Cart.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,ProductModule,HttpClientModule,SheardModule,CartModule
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: TokenInterceptorService,
      multi: true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
