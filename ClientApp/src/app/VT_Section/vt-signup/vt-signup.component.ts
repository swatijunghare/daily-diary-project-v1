import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-vt-signup',
  templateUrl: './vt-signup.component.html',
  styleUrls: ['./vt-signup.component.css']
})
export class VTSignupComponent {
  constructor(private fb:FormBuilder,
    private router:Router){}

  signupForm = this.fb.group({
    fname :["",Validators.required],
    lname :["",Validators.required],
    fullname :["",Validators.required],
    mobile :["",Validators.required],
    gender :["",Validators.required],
    dob :["",Validators.required],
    qualification :["",Validators.required],
    emailId :["",([Validators.required,Validators.email])],
    password :["",Validators.required]
   });
   
   signup(){
   console.log( this.signupForm.value);
   this.router.navigate(['/student_dashboard']);

   }
}
//loginForm = this.fb.group({
  // other form controls
 // male: [false],
 // female: [false],
//});