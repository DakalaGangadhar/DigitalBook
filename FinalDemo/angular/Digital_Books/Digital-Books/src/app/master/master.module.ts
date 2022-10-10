import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MasterComponent } from './master/master.component';
import { BrowserModule } from '@angular/platform-browser';
import { MasterHomeComponent } from './master-home/master-home.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { Mainroutes } from '../routing/mainroutes';
import { TokenInterceptorService } from '../services/tokenInceptorservice';
import { JwtHelperService, JWT_OPTIONS } from '@auth0/angular-jwt';



@NgModule({
  declarations: [
    MasterComponent,
    MasterHomeComponent
  ],
  imports: [
    BrowserModule,
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forRoot(Mainroutes),
    HttpClientModule
  ],
  providers: [{provide:HTTP_INTERCEPTORS,useClass:TokenInterceptorService,multi:true},{provide:JWT_OPTIONS,useValue:JWT_OPTIONS},JwtHelperService],
  bootstrap: [MasterComponent]
})
export class MasterModule { }
