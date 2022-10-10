import { HttpClientTestingModule } from '@angular/common/http/testing';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { LoginServiceService } from 'src/app/services/login-service.service';

import { MasterComponent } from './master.component';

describe('MasterComponent', () => {
  let component: MasterComponent;
  let fixture: ComponentFixture<MasterComponent>;

  beforeEach(async () => {
    let serviceLogin:LoginServiceService;
    await TestBed.configureTestingModule({
      declarations: [ MasterComponent ],
      imports:[HttpClientTestingModule],
    })
    .compileComponents();
    serviceLogin=TestBed.inject(LoginServiceService);
    fixture = TestBed.createComponent(MasterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  it('login test with true', async(() => {
    fixture = TestBed.createComponent(MasterComponent);
    component = fixture.debugElement.componentInstance;
    let result=component.LoggedIn(true);
    console.log('text', result);
    expect(result).toEqual(false);
  }));
  it('login test with false', async(() => {
    fixture = TestBed.createComponent(MasterComponent);
    component = fixture.debugElement.componentInstance;
    let result=component.LoggedIn(false);
    console.log('text false', result);
    expect(result).toEqual(true);
  }));
  it('logout', async(() => {
    fixture = TestBed.createComponent(MasterComponent);
    component = fixture.debugElement.componentInstance;
    let result=component.Logout();
    console.log('logout', result);
    expect(result).toEqual(undefined);
  }));
});
