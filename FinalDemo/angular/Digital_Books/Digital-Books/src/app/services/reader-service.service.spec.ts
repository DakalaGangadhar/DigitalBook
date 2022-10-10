import { HttpClient, HttpClientModule } from '@angular/common/http';
import { TestBed } from '@angular/core/testing';
import { JwtHelperService, JWT_OPTIONS } from '@auth0/angular-jwt';
import { ApiListService } from '../api-list.service';

import { ReaderServiceService } from './reader-service.service';

describe('ReaderServiceService', () => {
  let service: ReaderServiceService;
  let http:HttpClient;
  let apilist:ApiListService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientModule]
    });
    service = TestBed.inject(ReaderServiceService);
    http= TestBed.inject(HttpClient);
    apilist=TestBed.inject(ApiListService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
