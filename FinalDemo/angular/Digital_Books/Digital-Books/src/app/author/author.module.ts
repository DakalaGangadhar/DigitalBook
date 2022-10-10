import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthorComponent } from './author/author.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { authorroutes } from '../routing/authorroutes';
import { GridUiModule } from '../grid-ui/grid-ui.module';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { AuthorServiceService } from '../services/author-service.service';
import { TokenInterceptorService } from '../services/tokenInceptorservice';



@NgModule({
  declarations: [
    AuthorComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    RouterModule.forChild(authorroutes),
    GridUiModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers:[AuthorServiceService,{provide:HTTP_INTERCEPTORS,useClass:TokenInterceptorService,multi:true}]
})
export class AuthorModule { }
