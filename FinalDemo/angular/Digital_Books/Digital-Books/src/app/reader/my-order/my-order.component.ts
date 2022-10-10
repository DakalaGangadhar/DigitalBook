import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { JwtHelperService } from '@auth0/angular-jwt';
import { ApiListService } from 'src/app/api-list.service';
import { LoginServiceService } from 'src/app/services/login-service.service';

@Component({
  selector: 'app-my-order',
  templateUrl: './my-order.component.html',
  styleUrls: ['./my-order.component.css']
})
export class MyOrderComponent implements OnInit {
  orderColumns: Array<any> =new Array<any>();
  orderData: Array<any> =new Array<any>();
  public imageURL:string='';
  public name:any='';
  public readername:any='';
  constructor(private jwt: JwtHelperService, private _auth: LoginServiceService, private _apilist:ApiListService) { }

  ngOnInit(): void {
   this.imageURL=this._apilist.imageURL;

  }
  @Input("order-columns")
  set SetGridColumns(_orderColumn:Array<any>){
    this.orderColumns=_orderColumn;
  }
  @Input("order-data")
  set SetGridData(_orderdata:Array<any>){    
   
    this.orderData=_orderdata;
    this.readername=this.orderData[0]?.reader.split("@",2)
    if(this.orderData.length>0){
      this.name=this.readername[0];
    }   
    console.log("grid-data loading",this.orderData);
  }
  @Output("order-cancel")
  _ordercancelemitemitter:EventEmitter<any>=new EventEmitter<any>();
  cancelOrder(_cancelOrder:any){
    
    this._ordercancelemitemitter.emit(_cancelOrder);
  }
  @Output("view-invoice")
  _viewinvoiceemitemitter:EventEmitter<any>=new EventEmitter<any>();
  viewInvoice(_viewInvoice:any){
    
    this._viewinvoiceemitemitter.emit(_viewInvoice);
  }
  @Output("unview-invoice")
  _unviewinvoiceemitemitter:EventEmitter<any>=new EventEmitter<any>();
  viewUnInvoice(_unviewInvoice:any){
    
    this._unviewinvoiceemitemitter.emit(_unviewInvoice);
  }

}
