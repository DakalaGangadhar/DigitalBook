import { HttpClient, HttpClientModule } from '@angular/common/http';
import { TestBed } from '@angular/core/testing';
import { Router, RouterModule } from '@angular/router';
import { ApiListService } from '../api-list.service';

import { LoginServiceService } from './login-service.service';

describe('LoginServiceService', () => {
  let service: LoginServiceService;
  let http:HttpClient;
  let router:Router;
  let apilist:ApiListService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientModule,RouterModule]
    });
    service = TestBed.inject(LoginServiceService);
    http=TestBed.inject(HttpClient);
    router=TestBed.inject(Router);
    apilist=TestBed.inject(ApiListService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
