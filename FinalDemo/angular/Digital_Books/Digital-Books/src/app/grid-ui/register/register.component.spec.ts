import { HttpClientTestingModule } from '@angular/common/http/testing';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { Router, RouterModule } from '@angular/router';
import { LoginServiceService } from 'src/app/services/login-service.service';
import { RegisterServiceService } from 'src/app/services/register-service.service';

import { RegisterComponent } from './register.component';

describe('RegisterComponent', () => {
  let component: RegisterComponent;
  let fixture: ComponentFixture<RegisterComponent>;

  beforeEach(async () => {
    let router:Router;
    let serviceLogin:LoginServiceService;
    let serviceRegister:RegisterServiceService;
    await TestBed.configureTestingModule({
      declarations: [ RegisterComponent ],
      imports:[HttpClientTestingModule, RouterModule],
    })
    .compileComponents();
    router=TestBed.inject(Router);
    serviceLogin=TestBed.inject(LoginServiceService);
    serviceRegister=TestBed.inject(RegisterServiceService);

    fixture = TestBed.createComponent(RegisterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  it('register data', async(() => {
    fixture = TestBed.createComponent(RegisterComponent);
    component = fixture.debugElement.componentInstance;
    let result=component.registerUser();
    console.log('register data',result);
    expect(result).toEqual(undefined);
  })); 
});
