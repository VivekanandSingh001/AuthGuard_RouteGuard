import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import{FormGroup,FormBuilder} from '@angular/forms';
import { Router } from '@angular/router';
@Component({
  selector: 'app-register',
     templateUrl: './register.component.html',
    styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit{
  public registerForm!:FormGroup;
  constructor(private formBuilder:FormBuilder , private http:HttpClient,private router:Router){}
  ngOnInit(): void {
    this.registerForm = this.formBuilder.group({
      fullName:[''],
      email:[''],
      password:[''],
      mobile:['']
    })     
  }
  signUp(){
this.http.post<any>("http://localhost:3000/signUpUsers",this.registerForm.value).subscribe(res=>{
  alert("Sign Up Successfull");
  this.registerForm.reset();
  this.router.navigate(['login/Login'])
},
err=>{
  alert("Something Went Wrong");
}
)
  }

}