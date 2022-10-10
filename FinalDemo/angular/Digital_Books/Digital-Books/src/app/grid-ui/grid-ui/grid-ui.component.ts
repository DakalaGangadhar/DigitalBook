import { HttpClient } from '@angular/common/http';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ApiListService } from 'src/app/api-list.service';

@Component({
  selector: 'app-grid-ui',
  templateUrl: './grid-ui.component.html',
  styleUrls: ['./grid-ui.component.css']
})
export class GridUiComponent implements OnInit {

  constructor(private http:HttpClient, private _apilist:ApiListService) { }
  gridColumns: Array<any> =new Array<any>();
  gridData: Array<any> =new Array<any>();
  @Input("readerdeletebutton") public readerdeletebutton:any;
  @Input("readereditbutton") public readereditbutton:any;
  public displayNone:any="";
  public imagePath:any
  public imageURL:any="";
  

  ngOnInit(): void {
   this.imageURL= this._apilist.imageURL;
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
   @Output("book-block")
  _blockemitemitter:EventEmitter<any>=new EventEmitter<any>();
  blockGrid(_block:any){
    this._blockemitemitter.emit(_block);
  }
  @Output("book-unblock")
  _unblockemitemitter:EventEmitter<any>=new EventEmitter<any>();
  unblockGrid(_unblock:any){
    this._unblockemitemitter.emit(_unblock);
  }
 // blockGrid(inputdata:any){
   // console.log("block", inputdata);
    //this.http.put(this.imageURL+this.block, inputdata.id).subscribe(res=>this.BlockUnBlock(res),res=>console.log(res))
  //}
  //unblockGrid(input:any){
    //console.log("block", input);
    //this.http.put(this.imageURL+this.unblock, input.id).subscribe(res=>this.BlockUnBlock(res),res=>console.log(res))
  //}
  //BlockUnBlock(input:any){
    //console.log("block and unblock", input);
  //}

}