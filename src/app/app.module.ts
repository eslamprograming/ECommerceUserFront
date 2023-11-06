import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SheardModule } from 'src/Models/Sheard/Sheard.module';
import { AuthModule } from 'src/Models/Auth/Auth.module';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,SheardModule,AuthModule,FormsModule,RouterModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
