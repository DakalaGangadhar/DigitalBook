import { HttpClientTestingModule } from '@angular/common/http/testing';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { Router, RouterModule } from '@angular/router';
import { JwtHelperService, JWT_OPTIONS } from '@auth0/angular-jwt';
import { ApiListService } from 'src/app/api-list.service';
import { LoginServiceService } from 'src/app/services/login-service.service';

import { ReaderGridComponent } from './reader-grid.component';

describe('ReaderGridComponent', () => {
  let component: ReaderGridComponent;
  let fixture: ComponentFixture<ReaderGridComponent>;
  

  beforeEach(async () => {
    let router:Router;
    let serviceLogin:LoginServiceService;
    let jwthelperService:JwtHelperService;
    let apilist:ApiListService;
    await TestBed.configureTestingModule({
      declarations: [ ReaderGridComponent ],
      imports:[HttpClientTestingModule, RouterModule],
      providers:[{provide:JWT_OPTIONS,useValue:JWT_OPTIONS},JwtHelperService]
    })
    .compileComponents();
    router=TestBed.inject(Router);
    serviceLogin=TestBed.inject(LoginServiceService);
    jwthelperService=TestBed.inject(JwtHelperService);
    apilist=TestBed.inject(ApiListService);

    fixture = TestBed.createComponent(ReaderGridComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  it('should create the app', async(() => {
    const fixture = TestBed.createComponent(ReaderGridComponent);
    const app = fixture.componentInstance;
    expect(app.isdata).toEqual("");
  }));
});
