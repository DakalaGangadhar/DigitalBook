import { HttpClient, HttpClientModule } from '@angular/common/http';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { Router, RouterModule } from '@angular/router';
import { JwtHelperService, JWT_OPTIONS } from '@auth0/angular-jwt';
import { LoginServiceService } from 'src/app/services/login-service.service';
import { ReaderServiceService } from 'src/app/services/reader-service.service';
import { TokenInterceptorService } from 'src/app/services/tokenInceptorservice';
import { ReaderModule } from '../reader.module';
import { HttpClientTestingModule } from '@angular/common/http/testing';

import { LoginComponent } from './login.component';

describe('LoginComponent', () => {
  let component: LoginComponent;
  let fixture: ComponentFixture<LoginComponent>;

  beforeEach(async () => {
    let http:HttpClient;
    let router:Router;
    let serviceLogin:LoginServiceService;
    let serviceReader:ReaderServiceService;
    let jwthelperService:JwtHelperService;
    let tokenInterceptorService:TokenInterceptorService;
    await TestBed.configureTestingModule({
      imports:[HttpClientTestingModule, HttpClientModule,RouterModule,ReaderModule],
      declarations: [ LoginComponent ],
      providers:[{provide:JWT_OPTIONS,useValue:JWT_OPTIONS},JwtHelperService]
    })
    .compileComponents();
    http=TestBed.inject(HttpClient);
    router=TestBed.inject(Router);
    serviceLogin=TestBed.inject(LoginServiceService);
    serviceReader=TestBed.inject(ReaderServiceService);
    jwthelperService=TestBed.inject(JwtHelperService);
    tokenInterceptorService=TestBed.inject(TokenInterceptorService);
    
    fixture = TestBed.createComponent(LoginComponent);    
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  it('login component login user', async(() => {
    fixture = TestBed.createComponent(LoginComponent);
    component = fixture.debugElement.componentInstance;
    let result=component.loginUser();
    console.log('login user',result);
    expect(result).toEqual(undefined);
  }));
  it('search data', async(() => {
    fixture = TestBed.createComponent(LoginComponent);
    component = fixture.debugElement.componentInstance;
    let resultdata=component.SearchByReader();
    console.log('search data',resultdata);
    expect(resultdata).toEqual(undefined);
  }));
  it('login component success', async(() => {
    fixture = TestBed.createComponent(LoginComponent);
    component = fixture.debugElement.componentInstance;
    let resultdata=component.Success('data');
    console.log('success',resultdata);
    expect(resultdata).toEqual(undefined);
  }));
});
