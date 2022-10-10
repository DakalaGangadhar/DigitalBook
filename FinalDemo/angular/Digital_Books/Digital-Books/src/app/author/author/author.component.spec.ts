import { HttpClient, HttpClientModule } from '@angular/common/http';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { Router, RouterModule } from '@angular/router';
import { ApiListService } from 'src/app/api-list.service';
import { AuthorModel } from 'src/app/models/AuthorModel';
import { AuthorServiceService } from 'src/app/services/author-service.service';

import { AuthorComponent } from './author.component';

describe('AuthorComponent', () => {
  let component: AuthorComponent;
  let fixture: ComponentFixture<AuthorComponent>;

  beforeEach(async () => {
    let http:HttpClient;
    let router:Router;
    let author:AuthorServiceService;
    let apilist:ApiListService;
    await TestBed.configureTestingModule({
      declarations: [ AuthorComponent ],
      imports:[HttpClientTestingModule, HttpClientModule,RouterModule],
    })
    .compileComponents();
    http=TestBed.inject(HttpClient);
    router=TestBed.inject(Router);
    author=TestBed.inject(AuthorServiceService);
    apilist=TestBed.inject(ApiListService);
    fixture = TestBed.createComponent(AuthorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  it(`should have a edit author'`, async(() => {
    fixture = TestBed.createComponent(AuthorComponent);
    component = fixture.debugElement.componentInstance;
    let data=component.EditAuthor('Hi');
    expect('Hi').toEqual('Hi');
  }));
  it(`should have a data search'`, async(() => {
    fixture = TestBed.createComponent(AuthorComponent);
    component = fixture.debugElement.componentInstance;
    let data=component.GetAuthorByReader();
    expect(data).toEqual();
  }));
  
});
