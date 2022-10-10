import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
import { JwtHelperService } from '@auth0/angular-jwt';
import { ApiListService } from 'src/app/api-list.service';
import { AuthorModel } from 'src/app/models/AuthorModel';
import { LoginServiceService } from 'src/app/services/login-service.service';

@Component({
  selector: 'app-reader-grid',
  templateUrl: './reader-grid.component.html',
  styleUrls: ['./reader-grid.component.css']
})
export class ReaderGridComponent implements OnInit {

  constructor(private jwt: JwtHelperService, private _auth: LoginServiceService,private _router:Router, private _apilist:ApiListService) { }
  
  AuthorModelStore: AuthorModel = new AuthorModel();
  public imageURL:any="";
  gridColumns: Array<any> =new Array<any>();
  gridData: Array<any> =new Array<any>();
  @Input("readerdeletebutton") public readerdeletebutton:any;
  @Input("readereditbutton") public readereditbutton:any;
  public displayNone:any="";
  public imagePath:any
  public name:any='';
  public isdata:any='';
  

  ngOnInit(): void {
    this.imageURL=this._apilist.imageURL;
    this.name=this.jwt.decodeToken(this._auth.getToken()?.toString())?.unique_name;
    console.log(this.jwt.decodeToken(this._auth.getToken()?.toString()));
    console.log("Data getting",this.name);

    if(this.readereditbutton){
      this.displayNone="disabled-link"
    }else{
      this.displayNone=""
    }
  }
  getImage(input:any){
    console.log(input)
      }



  @Input("grid-columns")
  set SetGridColumns(_gridColumn:Array<any>){
    this.gridColumns=_gridColumn;
  }
  @Input("grid-data")
  set SetGridData(_griddata:Array<any>){    
    this.gridData=_griddata;
    console.log("grid-data loading",this.gridData);
  }
  @Output("grid-selected")
  emitemitter:EventEmitter<any>=new EventEmitter<any>();

  selectedGrid(_selected:any){
    
    this.emitemitter.emit(_selected);
  }
  @Output("grid-deleted")
  _emitemitter:EventEmitter<any>=new EventEmitter<any>();
  deleteGrid(_deleted:any){
    this._emitemitter.emit(_deleted);
  }
  @Output("grid-bookbuy")
  _bookbuyemitemitter:EventEmitter<any>=new EventEmitter<any>();
  buyABook(_bookbuy:any){
    debugger;
    this._bookbuyemitemitter.emit(_bookbuy);
  }
  


 

}
