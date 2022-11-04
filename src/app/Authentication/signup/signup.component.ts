import { Component, OnInit } from '@angular/core';
import {FormControl, Validators,FormGroup} from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  constructor(
    private router:Router
  ) { }

  ngOnInit(): void {
  }
  selectedValue!:string;

  abc:any;
  brands = [
    { value: 'HR', viewValue: 'HR' },
    { value: 'CEO', viewValue: 'CEO' },
    { value: 'MANAGER', viewValue: 'MANAGER' },
    { value: 'EMPLOYEE', viewValue: 'EMPLOYEE' },
  ];



  signupForm= new FormGroup({
    email: new FormControl("", Validators.required),
    password: new FormControl("", Validators.required),
    first: new FormControl("", Validators.required),
    lname: new FormControl("", Validators.required),
    address: new FormControl("", Validators.required),
    designation: new FormControl("", Validators.required),
  })

  onSubmit(){
    console.log(this.signupForm.value)
    this.abc= this.signupForm.value;
    this.abc.role = this.selectedValue
    console.log("ANSWER",this.abc)
    this.signupForm.reset()
    this.router.navigate(['/login'])

  }

  emailFormControl = new FormControl('', [Validators.required, Validators.email]);
}
