import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {

  registerForm=new FormGroup({
    firstName:new FormControl(null,[Validators.required,Validators.minLength(3),Validators.maxLength(10)]),
    lastName:new FormControl(null,[Validators.required,Validators.minLength(3),Validators.maxLength(10)]),
    age:new FormControl(null,[Validators.min(20),Validators.max(70),Validators.required]),
    email:new FormControl(null,[Validators.email,Validators.required]),
    password:new FormControl(null,[Validators.pattern('^(?=.\d)(?=.[a-z])(?=.[A-Z])(?=.[a-zA-Z]).{8,}$')
    ,Validators.required]),
    
    // pattern()
    });
    age: any;
    
    submitRegisterForm(registerForm:FormGroup){
      console.log(registerForm.value);

    } 
    
}
