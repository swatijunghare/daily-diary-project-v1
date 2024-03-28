import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { VTModel } from 'src/app/shared/Model/VTModel.model';
import { ApiService } from 'src/app/shared/api.service';

@Component({
  selector: 'app-vt-login',
  templateUrl: './vt-login.component.html',
  styleUrls: ['./vt-login.component.css']
})
export class VTLoginComponent {
  isSubmitted : boolean = false;
  public loginObj = new VTModel();

  constructor(private fb:FormBuilder,
    private router:Router,
    private apiService:ApiService){}

    loginForm = this.fb.group({
  emailId :["",([Validators.required,Validators.email])],
  password :["",Validators.required]
 });

  login(){
    this.loginObj.EmailId  = this.loginForm.value.emailId as string;
    this.loginObj.Password = this.loginForm.value.password as string;
    // this.apiService.login(this.loginObj)
    // .subscribe(res =>{
    //   alert(res.message);
    // })
    // // console.log("form values :",this.loginForm.value);
    // this.router.navigate(['/student_dashboard']);
   this.apiService.login(this.loginObj)
   .subscribe({
    next:res =>{
      console.log("response =",res);
      if(res && res.statusCode === 200){
        this.router.navigate(['/student_dashboard']);
        alert(res.message);
      } else {
        alert(res.message);
      }
    },
    error:err=>{
      if(err.status === 404){
        alert(err.error.message || 'VT Not Found');
      }
      else{
        console.error("Login failed",err);
      }
    }
   })
  }

   f(name:any){
    return this.loginForm.get(name);
  }

}
