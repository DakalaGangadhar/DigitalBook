import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ApiListService {

  constructor() { }
  public api_test="";

//---DigitalBook proj
/*public bookupdateUrl:any="https://localhost:44330/api/Books/bookupdate";
public createbooksUrl:any="https://localhost:44330/api/Books/create-books";
public imageURL:any="https://localhost:44330/";

public getbooksdataURL="https://localhost:44330/api/Books/getbooksdata";
public _BooksDeleteUrl="https://localhost:44330/api/Books/book-delete";
public authorcreatebookUrl:any='https://localhost:44330/api/Books/author-create-book';
public bookblockUrl:any='https://localhost:44330/api/Books/book-block';
public bookunblockUrl:any='https://localhost:44330/api/Books/book-unblock';

public _readerloginUrl:any="https://localhost:44330/api/UserLogin/login-user";
public _authorloginUrl:any="https://localhost:44330/api/Author/author-login";

public _author_registerUrl:any="https://localhost:44330/api/Author/author-register";
public _reader_registerUrl:any="https://localhost:44330/api/UserLogin/register-user";

public _GetAuthorByReaderSearch:any="https://localhost:44330/api/UserData/GetAuthorByReaderSearch";
public _BooksDelete:any="https://localhost:44330/api/UserData";
public _CreateBook:any="https://localhost:44330/api/Order/create-order";
public _GetOrderData:any="https://localhost:44330/api/Order/getorderdata";
public _CancelOrder:any="https://localhost:44330/api/Order/order-cancel"; */



//---DigitalBook Microservice,Gateway and RobbitMq proj


public imageURL:any="https://digitalbookstorage.blob.core.windows.net/images/";
public bookupdateUrl:any="https://localhost:44385/api/gateway/books/bookupdate";
public createbooksUrl:any="https://localhost:44385/api/gateway/books/create-books";
public getbooksdataURL="https://localhost:44385/api/gateway/books/getbooksdata";
public _BooksDeleteUrl="https://localhost:44385/api/gateway/books/book-delete";
public authorcreatebookUrl:any='https://localhost:44385/api/gateway/books/author-create-book';
public bookblockUrl:any='https://localhost:44385/api/gateway/books/book-block';
public bookunblockUrl:any='https://localhost:44385/api/gateway/books/book-unblock';

public _readerloginUrl:any="https://localhost:44385/api/gateway/userlogin/login-user";
public _authorloginUrl:any="https://localhost:44385/api/gateway/author/author-login";

public _author_registerUrl:any="https://localhost:44385/api/gateway/author/author-register";
public _reader_registerUrl:any="https://localhost:44385/api/gateway/userlogin/register-user";

public _GetAuthorByReaderSearch:any="https://localhost:44385/api/gateway/userdata/GetAuthorByReaderSearch";
public _BooksDelete:any="https://localhost:44385/api/gateway/userdata";
public _CreateBook:any="https://localhost:44385/api/gateway/order/create-order";
public _GetOrderData:any="https://localhost:44385/api/gateway/order/getorderdata";
public _CancelOrder:any="https://localhost:44385/api/gateway/order/order-cancel"; 
public _ViewInvoice:any="https://localhost:44385/api/gateway/order/invoice-view";
public _UnViewInvoice:any="https://localhost:44385/api/gateway/order/invoice-unview";




//20.219.123.21 deployment
/*public imageURL:any="https://digitalbookstorage.blob.core.windows.net/images/";
public bookupdateUrl:any="http://20.219.123.21/api/gateway/books/bookupdate";
public createbooksUrl:any="http://20.219.123.21/api/gateway/books/create-books";


public getbooksdataURL="http://20.219.123.21/api/gateway/books/getbooksdata";
public _BooksDeleteUrl="http://20.219.123.21/api/gateway/books/book-delete";
public authorcreatebookUrl:any='http://20.219.123.21/api/gateway/books/author-create-book';
public bookblockUrl:any='http://20.219.123.21/api/gateway/books/book-block';
public bookunblockUrl:any='http://20.219.123.21/api/gateway/books/book-unblock';

public _readerloginUrl:any="http://20.219.123.21/api/gateway/userlogin/login-user";
public _authorloginUrl:any="http://20.219.123.21/api/gateway/author/author-login";

public _author_registerUrl:any="http://20.219.123.21/api/gateway/author/author-register";
public _reader_registerUrl:any="http://20.219.123.21/api/gateway/userlogin/register-user";

public _GetAuthorByReaderSearch:any="http://20.219.123.21/api/gateway/userdata/GetAuthorByReaderSearch";
public _BooksDelete:any="http://20.219.123.21/api/gateway/userdata";
public _CreateBook:any="http://20.219.123.21/api/gateway/order/create-order";
public _GetOrderData:any="http://20.219.123.21/api/gateway/order/getorderdata";
public _CancelOrder:any="http://20.219.123.21/api/gateway/order/order-cancel"; 
public _ViewInvoice:any="http://20.219.123.21/api/gateway/order/invoice-view";
public _UnViewInvoice:any="http://20.219.123.21/api/gateway/order/invoice-unview";
*/





}
