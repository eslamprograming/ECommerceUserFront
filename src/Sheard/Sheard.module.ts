import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SheardComponent } from './Sheard.component';
import { SpinneerComponent } from './Compontes/Spinneer/Spinneer.component';
import { LoginComponent } from './Compontes/Login/Login.component';
import { RegisterComponent } from './Compontes/Register/Register.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { ProfileComponent } from './Compontes/profile/profile.component';
import { ChangePasswordComponent } from './Compontes/ChangePassword/ChangePassword.component';

@NgModule({
  imports: [
    CommonModule,FormsModule,HttpClientModule,RouterModule
  ],
  declarations: [SheardComponent,SpinneerComponent,LoginComponent,RegisterComponent,ProfileComponent,ChangePasswordComponent],
  exports:[SpinneerComponent,LoginComponent,RegisterComponent,ProfileComponent,ChangePasswordComponent]
})
export class SheardModule { }
