import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { JwtHelperService } from '@auth0/angular-jwt';
import { ApiListService } from 'src/app/api-list.service';
import { AuthorModel } from 'src/app/models/AuthorModel';
import { OrderDetailsModel } from 'src/app/models/OrderDetailsModel';
import { OrderModel } from 'src/app/models/OrderModel';
import { ReaderModel } from 'src/app/models/ReaderModel';
import { LoginServiceService } from 'src/app/services/login-service.service';
import { ReaderServiceService } from 'src/app/services/reader-service.service';

@Component({
  selector: 'app-reader',
  templateUrl: './reader.component.html',
  styleUrls: ['./reader.component.css']
})
export class ReaderComponent implements OnInit {

  ReaderModel:ReaderModel=new ReaderModel();
  ReaderModels:Array<ReaderModel>=new Array<ReaderModel>();
  AuthorModelStore: AuthorModel = new AuthorModel();
  OrderModel: OrderModel = new OrderModel();
  OrderDetailsModels:Array<OrderDetailsModel>=new Array<OrderDetailsModel>();
 

  public id_data:string='';
  public isEdit=false;
  public readerSearchdiv:boolean=true;
  public readerGridDiv:boolean=false;
  public readerBookBuyDiv:boolean=false;

  public readereditbutton:boolean=true;
  public readerdeletebutton:boolean=true;
  public bookBuy:boolean=false;
  public viewBookdata:boolean=false;
  public myOrderdiv:boolean=false;
  public imageBaseUrl:any='';

  constructor(private http:HttpClient,private _router:Router,private _service:ReaderServiceService,private jwt: JwtHelperService, private _auth: LoginServiceService, private _apilist:ApiListService) { }
public name:any='';
  ngOnInit(): void {
    this.imageBaseUrl=this._apilist.imageURL;
    this.name=this.jwt.decodeToken(this._auth.getToken()?.toString())?.unique_name;
    console.log(this.jwt.decodeToken(this._auth.getToken()?.toString()));
    console.log(this.name);   
  }
  /*Add(){   
    
    if(this.isEdit){
      this.http.put(this.url,this.ReaderModel).subscribe(res=>this.PostSuccess(res),res=>console.log(res))
    }
    else{
      this.http.post(this.url,this.ReaderModel).subscribe(res=>this.PostSuccess(res),res=>console.log(res))
    }
       
        this.ReaderModel = new ReaderModel();        
      
  }*/
  
  SearchAuthorByReader(){   
   this._service.GetAuthorByReaderSearch(this.ReaderModel).subscribe(res=>this.Success(res),res=>console.log(res)); 
   this.readerSearchdiv=false; 
   this.readerGridDiv=true;
   this.readerBookBuyDiv=false;
   this.viewBookdata=true;
   this.myOrderdiv=false;
  }
  
  EditReader(input:any){
    this.isEdit=true;
    this.id_data=input.id;
    this.ReaderModel=input;
   // this.http.put(this.url, this.id_data).subscribe(res=>this.Success(res),res=>console.log(res)); 
  }
  DeleteAuthor(inputdata:any){
    this.id_data=inputdata.id;  
    this._service.DeleteBooksData(this.id_data).subscribe(id_data => {
      console.log(id_data);
      this.SearchAuthorByReader();
    }); 
  }
  PostSuccess(input:any){
    this.SearchAuthorByReader();
  }
  Success(input: any) {
    console.log(input);
    this.ReaderModels = input;
  }
  readerLogin(){
    this._router.navigate(['reader/add']);
  }
  dirSearchBooks(){
    this.readerSearchdiv=true; 
    this.readerGridDiv=false;
   this.readerBookBuyDiv=false;
   this.myOrderdiv=false;
  }
  ReaderBuyABook(bookbuy:any){
    this.AuthorModelStore=bookbuy;
    console.log("Data getting",this.name);
    console.log("AuthorModelStore",this.AuthorModelStore);
    this.readerSearchdiv=false; 
   this.readerGridDiv=false;
   this.readerBookBuyDiv=true;
    if(this.name!=""){

      console.log("user login into site");

    }else{
      this._router.navigate(['reader/login']);
    }
  }
  viewBook(){
    console.log("view book");
    this.readerSearchdiv=false; 
    this.readerGridDiv=true;
    this.readerBookBuyDiv=false;
    this.myOrderdiv=false;
  }
  searchBook(){
    console.log("search book");
    this.readerSearchdiv=true; 
    this.readerGridDiv=false;
    this.readerBookBuyDiv=false;
    this.myOrderdiv=false;
  }
  Purchase(){
   console.log("buy data",this.AuthorModelStore);
   console.log("OrderModel",this.OrderModel);
   var createOrder={
    Reader :this.AuthorModelStore.referemail,
    CardHolderName:this.OrderModel.CardHolderName,
    CardNumber:this.OrderModel.CardName,
    ExpireDate:this.OrderModel.Expires,
    Cvv:this.OrderModel.CVV,
    CardId:this.OrderModel.Cardtype,
    BookIb:this.AuthorModelStore.id,
    CategoryId:this.AuthorModelStore.categoryid,
    CategoryName:this.AuthorModelStore.category,
    ReaderMail:this.name
   }
   this._service.CreateBookOrder(createOrder).subscribe(res=>this.CreateBookSuccess(res),res=>console.log(res));
  }
  CreateBookSuccess(input:any){
    console.log(input);
    this.readerSearchdiv=false; 
    this.readerGridDiv=true;
    this.readerBookBuyDiv=false;
    this.myOrderdiv=false;
    this.SearchAuthorByReader();
  }
  myOrder(){
    console.log("route");
    this._service.myOrder(this.name).subscribe(res=>this.GetOrderSuccess(res),res=>console.log(res)); 
    this.readerSearchdiv=false; 
    this.readerGridDiv=false;
    this.readerBookBuyDiv=false;
    this.myOrderdiv=true;
  }
  GetOrderSuccess(response:any){
    console.log("Get order data",response);
    this.OrderDetailsModels=response;

  }
  cancelOrder(_cancelorder:any){
    debugger;
    console.log("cancel order", _cancelorder);
    this._service.cancelOrder( _cancelorder.orderid).subscribe(res=>this.myOrder(),res=>console.log(res)); 
    this.myOrder();
  }
  viewInvoice(_viewinvoice:any){
    debugger;
    console.log("view invoice", _viewinvoice);
    this._service.viewInvoicedata( _viewinvoice.orderid).subscribe(res=>this.myOrder(),res=>console.log(res)); 
    this.myOrder();
  }
  unviewInvoice(_unviewinvoice:any){
    debugger;
    console.log("unview invoice", _unviewinvoice);
    this._service.unviewInvoicedata( _unviewinvoice.orderid).subscribe(res=>this.myOrder(),res=>console.log(res)); 
    this.myOrder();
  }

}
