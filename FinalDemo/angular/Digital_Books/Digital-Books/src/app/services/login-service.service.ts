import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { ApiListService } from '../api-list.service';

@Injectable({
  providedIn: 'root'
})
export class LoginServiceService {


  
  constructor(private http:HttpClient,private _router:Router, private _aplilist:ApiListService) { }

  loginReader(login:any){
    return this.http.post<any>(this._aplilist._readerloginUrl,login);
  }
  
  loginAuthor(login:any){
    return this.http.post<any>(this._aplilist._authorloginUrl,login);
  }
  logginIn(){
    return !!localStorage.getItem('token');
  }
  logoutUser(){
    localStorage.removeItem('token');
    this._router.navigate(['']);
  }
  getToken(){
    return localStorage.getItem('token');
  }
  
}
