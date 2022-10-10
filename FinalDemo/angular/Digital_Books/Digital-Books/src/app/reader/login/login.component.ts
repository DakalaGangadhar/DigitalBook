import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { JwtHelperService } from '@auth0/angular-jwt';
import { AuthorModel } from 'src/app/models/AuthorModel';
import { ReaderModel } from 'src/app/models/ReaderModel';
import { UserModel } from 'src/app/models/UserModel';
import { LoginServiceService } from 'src/app/services/login-service.service';
import { ReaderServiceService } from 'src/app/services/reader-service.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private http:HttpClient,private _serviceLogin:LoginServiceService,private _router:Router,private _readerservice:ReaderServiceService,private jwt: JwtHelperService) { }

  UserModel:UserModel=new UserModel();
  ReaderReaderModel:ReaderModel=new ReaderModel();
  ReaderModels:Array<ReaderModel>=new Array<ReaderModel>();
  AuthorModelStore: AuthorModel = new AuthorModel();
  public domain:any=window.location.href;
  domainArray:Array<any>=new Array<any>();
   public readerTemplate:boolean=true;
   public readerGridFlag:boolean=true;
   public id_data:string='';
  public isEdit=false;
  public readerFlag:boolean=true;

  public readereditbutton:boolean=true;
  public readerdeletebutton:boolean=true;
  public popupModel:any=false;
  public name:any='';
  ngOnInit(): void {    
    this.domainArray=window.location.href.split("/", 5);
    if(this.domainArray[3]=="reader"){
      this.readerTemplate=true;
    }else{
      this.readerTemplate=false;
    }
  }

  loginUser(){

    var _userData = {
      Username: this.UserModel.Username,
      Password: this.UserModel.Password
    };

    this.domainArray=window.location.href.split("/", 5);
    if(this.domainArray[3]=="reader"){
     

      this._serviceLogin.loginReader(_userData).subscribe(res=>{        
        localStorage.setItem('token',res.token);
        localStorage.setItem('readeremailid',this.UserModel.Username);
        this._router.navigate(['reader/add']);
      },res=>console.log(res));
    }else{     
      

      this._serviceLogin.loginAuthor(_userData).subscribe(res=>{
        localStorage.setItem('token',res.token);
        localStorage.setItem('authoremailid',this.UserModel.Username);
        this._router.navigate(['author/add']);
      },res=>console.log(res));
    }
    
  }
  redirecttoregisterUser(){
    this.domainArray=window.location.href.split("/", 5);
    if(this.domainArray[3]=="reader"){
      this._router.navigate(['reader/register']);
    }else{
      this._router.navigate(['author/register']);
    }    
  }
  SearchByReader(){   
    console.log(this.ReaderReaderModel);
    this._readerservice.GetAuthorByReaderSearch(this.ReaderReaderModel).subscribe(res=>this.Success(res),res=>console.log(res)); 
    this.readerGridFlag=false; 
   }
   Success(input:any){
     console.log("reader data testcase",input)
     this.ReaderModels = input;
   }
   EditReader(input:any){
    this.isEdit=true;
    this.id_data=input.id;
    this.ReaderReaderModel=input;
  }
  DeleteAuthor(inputdata:any){
    this.id_data=inputdata.id;  
    this._readerservice.DeleteBooksData(this.id_data).subscribe(id_data => {
      console.log(id_data);
    }); 
  }
  readerSearchBooks(){
    this.readerGridFlag=true;
   
  }
 
  ReaderBuyABook(bookbuy:any){
    this.AuthorModelStore=bookbuy;
    console.log("Data getting",this.name);
    console.log("AuthorModelStore",this.AuthorModelStore);
    if(this.name!=""){

    }else{
     this.readerGridFlag=true;
     this.popupModel=true;
    }
  }
  
}
