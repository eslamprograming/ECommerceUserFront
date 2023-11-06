import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SheardComponent } from './Sheard.component';
import { HeaderComponent } from './Header/Header.component';
import { HomeComponent } from './Home/Home.component';
import { FooterComponent } from './Footer/Footer.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [SheardComponent,HeaderComponent,HomeComponent,FooterComponent],
  exports:[HeaderComponent,HomeComponent,FooterComponent]
})
export class SheardModule { }
