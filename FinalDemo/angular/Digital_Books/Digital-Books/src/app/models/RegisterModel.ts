import { NgForm, FormBuilder, FormControl, FormGroup, Validators } from "@angular/forms";

export class RegisterModel{
    Username:string='';
    Password:string='';
   public formRegisterGroup:FormGroup;
    constructor(){
    var _builder=new FormBuilder();
    this.formRegisterGroup=_builder.group({
        UsernameControl:new FormControl('',Validators.compose([Validators.required,Validators.email])),
        UserPasswordControl:new FormControl('',Validators.compose([Validators.required,Validators.pattern("[0-9]+")]))
    });
  
    }
   
}