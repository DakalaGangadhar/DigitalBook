import { HttpClient, HttpClientModule } from '@angular/common/http';
import { async, TestBed } from '@angular/core/testing';
import { Router } from '@angular/router';
import { JwtHelperService, JWT_OPTIONS } from '@auth0/angular-jwt';
import { ApiListService } from '../api-list.service';

import { AuthorServiceService } from './author-service.service';
import { LoginServiceService } from './login-service.service';
import { ReaderServiceService } from './reader-service.service';

describe('AuthorServiceService', () => {
  let service: AuthorServiceService;
  let http:HttpClient;
  let apilist:ApiListService;
  
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientModule]
    });
    service = TestBed.inject(AuthorServiceService);
    http= TestBed.inject(HttpClient);  
    apilist=TestBed.inject(ApiListService);  
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
 /* it('#getData should return expected data', (done) => {
    var _data = {
      title: '',
      price: '',
      category:  '',
      author:'',
      active: '',
      contentdata: '',
      publisher: '',
      referemail: ''
    };  
 let data=localStorage.getItem('authoremailid');
    service.GetAuthorData(data).subscribe(data => {
      expect(data).toEqual(_data);
      done();
    }); 
  });*/
  
});
