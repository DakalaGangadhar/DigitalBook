import { HttpClient, HttpClientModule } from '@angular/common/http';
import { TestBed } from '@angular/core/testing';
import { JwtHelperService, JWT_OPTIONS } from '@auth0/angular-jwt';
import { ApiListService } from '../api-list.service';

import { RegisterServiceService } from './register-service.service';

describe('RegisterServiceService', () => {
  let service: RegisterServiceService;
  let http:HttpClient;
  let apilist:ApiListService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientModule]
      
    });
    service = TestBed.inject(RegisterServiceService);
    http=TestBed.inject(HttpClient);
    apilist=TestBed.inject(ApiListService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
