
import { NgForm,FormGroup,Validators,FormBuilder,FormControl } from "@angular/forms";

export class UserModel{
    Username:string='';
    Password:string='';
    public formUserGroup:FormGroup;
    constructor(){
    var _builder=new FormBuilder();
    this.formUserGroup=_builder.group({
        UsernameControl:new FormControl('',Validators.compose([Validators.required,Validators.email])),
        UserPasswordControl:new FormControl('',Validators.compose([Validators.required,Validators.pattern("[0-9]+")]))
    });
    
    /*var validationUsername=[];
        validationUsername.push(Validators.required);
        validationUsername.push(Validators.pattern("^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$"));
        this.formUserGroup.addControl("UsernameControl",new FormControl('',Validators.compose(validationUsername)));

        var validationcollection=[];
        validationcollection.push(Validators.required);
        validationcollection.push(Validators.pattern("^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).{8,15}$"));
        this.formUserGroup.addControl("UserPasswordControl",new FormControl('',Validators.compose(validationcollection))); 
        */   
    }
}