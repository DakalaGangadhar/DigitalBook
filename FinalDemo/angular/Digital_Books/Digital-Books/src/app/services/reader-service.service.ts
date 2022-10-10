import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, map, throwError } from 'rxjs';
import { ApiListService } from '../api-list.service';

@Injectable({
  providedIn: 'root'
})
export class ReaderServiceService {
  public _token:any='';

  constructor(private http:HttpClient, private _apilist:ApiListService) { }


  GetAuthorByReaderSearch(_readerModel:any){
    _readerModel.category;
    _readerModel.author;
    _readerModel.publisher;
    _readerModel.price;
   
    
    //return this.http.get<any>(this._GetAuthorByReaderSearch+'?category='+ _readerModel.category +'&author='+ _readerModel.author+'&publisher='+_readerModel.publisher+'&price='+ _readerModel.price);
   return this.http.post<any>(this._apilist._GetAuthorByReaderSearch, _readerModel);
  }
  DeleteBooksData(id_data:any){
    return this.http.delete(this._apilist._BooksDelete+'?authorid='+id_data);
  }
  getToken(){
    return localStorage.getItem('token');
  }
  logginIn(){
    return !!localStorage.getItem('token');
  }
  CreateBookOrder(createorder:any){

    return this.http.post(this._apilist._CreateBook,createorder)
      .pipe(map((data: any) => {     
        return data;
      })
      ,
       catchError((error) => {    // handle error
         
          if (error.status == 404) {
            //Handle Response code here
          }
          return throwError(error);
        })
      );
  }
  myOrder(readermail:any){

    return this.http.get(this._apilist._GetOrderData+'?readerEmailid='+readermail)
      .pipe(map((oderdata: any) => {     
        return oderdata;
      })
      ,
       catchError((error) => {    // handle error
         
          if (error.status == 404) {
            //Handle Response code here
          }
          return throwError(error);
        })
      );
  }
  cancelOrder(orderid:any){

    return this.http.put(this._apilist._CancelOrder+'?orderBookId='+orderid,'')
      .pipe(map((canceloder: any) => {     
        return canceloder;
      })
      ,
       catchError((error) => {    // handle error
         
          if (error.status == 404) {
            //Handle Response code here
          }
          return throwError(error);
        })
      );
  }
  viewInvoicedata(orderid:any){

    return this.http.put(this._apilist._ViewInvoice+'?orderBookId='+orderid,'')
      .pipe(map((canceloder: any) => {     
        return canceloder;
      })
      ,
       catchError((error) => {    // handle error
         
          if (error.status == 404) {
            //Handle Response code here
          }
          return throwError(error);
        })
      );
  }
  unviewInvoicedata(orderid:any){

    return this.http.put(this._apilist._UnViewInvoice+'?orderBookId='+orderid,'')
      .pipe(map((canceloder: any) => {     
        return canceloder;
      })
      ,
       catchError((error) => {    // handle error
         
          if (error.status == 404) {
            //Handle Response code here
          }
          return throwError(error);
        })
      );
  }
}
