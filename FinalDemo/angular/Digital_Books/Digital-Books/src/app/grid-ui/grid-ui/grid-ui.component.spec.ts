import { HttpClient, HttpClientModule } from '@angular/common/http';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ApiListService } from 'src/app/api-list.service';

import { GridUiComponent } from './grid-ui.component';

describe('GridUiComponent', () => {
  let component: GridUiComponent;
  let fixture: ComponentFixture<GridUiComponent>;

  beforeEach(async () => {
    let http:HttpClient;
    let apilist:ApiListService;
    await TestBed.configureTestingModule({
      declarations: [ GridUiComponent ],
      imports:[HttpClientTestingModule, HttpClientModule],
    })
    .compileComponents();
    http=TestBed.inject(HttpClient);
    apilist=TestBed.inject(ApiListService);

    fixture = TestBed.createComponent(GridUiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
