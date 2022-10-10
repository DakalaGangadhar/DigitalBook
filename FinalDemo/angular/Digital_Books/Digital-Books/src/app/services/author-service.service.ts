import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { ApiListService } from '../api-list.service';

@Injectable({
  providedIn: 'root'
})
export class AuthorServiceService {

 
  constructor(private http:HttpClient, private _apilist:ApiListService) { }


  GetAuthorData(_readerModel:any){
  
    //return this.http.get<any>(this._GetAuthorByReaderSearch+'?title='+ _readerModel.title +'&&author='+ _readerModel.author+'&&publisher='+_readerModel.publisher+'&&releasedate='+ _readerModel.releasedate);
    return this.http.get<any>(this._apilist.getbooksdataURL+'?auhtoremail='+_readerModel.referemail);
  }
  DeleteBooksDataByAuthor(id_data:any){
    return this.http.delete(this._apilist._BooksDeleteUrl+'?authorid='+id_data);
  }
  getToken(){
    return localStorage.getItem('token');
  }
  logginIn(){
    return !!localStorage.getItem('token');
  }
  BlockGridService(id:any){
    this.http.put(this._apilist.bookblockUrl, id).subscribe(res=>this.BlockUnBlock(res),res=>console.log(res))

  }
  UnBlockGridService(id:any){
    this.http.put(this._apilist.bookunblockUrl, id).subscribe(res=>this.BlockUnBlock(res),res=>console.log(res))
  }
  BlockUnBlock(input:any){
    console.log(input);

  }
  
}
