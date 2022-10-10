import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ApiListService } from '../api-list.service';

@Injectable({
  providedIn: 'root'
})
export class RegisterServiceService {

  
  constructor(private http:HttpClient, private _apilist:ApiListService) { }

  
  registerAuthor(register:any){
   
    return this.http.post<any>(this._apilist._author_registerUrl,register);
  }
  registerReader(register:any){
    return this.http.post<any>(this._apilist._reader_registerUrl,register);
  }
}
