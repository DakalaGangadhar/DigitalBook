import { HttpClient, HttpClientModule } from '@angular/common/http';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { Router, RouterModule } from '@angular/router';
import { JwtHelperService, JWT_OPTIONS } from '@auth0/angular-jwt';
import { ApiListService } from 'src/app/api-list.service';
import { LoginServiceService } from 'src/app/services/login-service.service';
import { ReaderServiceService } from 'src/app/services/reader-service.service';
import { ReaderModule } from '../reader.module';

import { ReaderComponent } from './reader.component';

describe('ReaderComponent', () => {
  let component: ReaderComponent;
  let fixture: ComponentFixture<ReaderComponent>;

  beforeEach(async () => {
    let http:HttpClient;
  let router:Router;
  let serviceLogin:LoginServiceService;
  let serviceReader:ReaderServiceService;
  let jwthelperService:JwtHelperService;
  let apilist:ApiListService;
    await TestBed.configureTestingModule({
      declarations: [ ReaderComponent ],
      imports:[HttpClientTestingModule, HttpClientModule,RouterModule,ReaderModule],
      providers:[{provide:JWT_OPTIONS,useValue:JWT_OPTIONS},JwtHelperService]
    })
    .compileComponents();

    http=TestBed.inject(HttpClient);
    router=TestBed.inject(Router);
    serviceLogin=TestBed.inject(LoginServiceService);
    serviceReader=TestBed.inject(ReaderServiceService);
    apilist=TestBed.inject(ApiListService);

    fixture = TestBed.createComponent(ReaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  it('reader search', async(() => {
    fixture = TestBed.createComponent(ReaderComponent);
    component = fixture.debugElement.componentInstance;
    let result=component.SearchAuthorByReader();
    console.log('reader search',result);
    expect(result).toEqual(undefined);
  }));
  it('reader purchase', async(() => {
    fixture = TestBed.createComponent(ReaderComponent);
    component = fixture.debugElement.componentInstance;
    let result=component.Purchase();
    console.log('purchase data',result);
    expect(result).toEqual(undefined);
  }));
});
