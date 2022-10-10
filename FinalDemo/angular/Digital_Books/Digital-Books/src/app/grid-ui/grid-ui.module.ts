import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GridUiComponent } from './grid-ui/grid-ui.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RegisterComponent } from './register/register.component';
import { RouterModule } from '@angular/router';
import { gridroutes } from '../routing/gridroutes';
import { ReaderGridComponent } from './reader-grid/reader-grid.component';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { TokenInterceptorService } from '../services/tokenInceptorservice';
import { JwtHelperService, JWT_OPTIONS } from '@auth0/angular-jwt';



@NgModule({
  declarations: [
    GridUiComponent,
    RegisterComponent,
    ReaderGridComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forChild(gridroutes)
  ],
  providers:[{provide:HTTP_INTERCEPTORS,useClass:TokenInterceptorService,multi:true},{provide:JWT_OPTIONS,useValue:JWT_OPTIONS},JwtHelperService],
  exports:[GridUiComponent,CommonModule,ReaderGridComponent]
})
export class GridUiModule { }
