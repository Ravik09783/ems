import { Component, OnInit } from '@angular/core';
import {FormControl, Validators,FormGroup} from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(
    private router:Router,
    private auth: AuthService
  ) { }

  ngOnInit(): void {
    // this.auth.print()
  }

  selectedValue!:string;

  abc:any;

    loginForm= new FormGroup({
    email: new FormControl("", Validators.required),
    password: new FormControl("", Validators.required),
    
  })

  onSubmit(){
    // var ans = this.loginForm.value
    // ans.role= this.selectedValue

    if(!this.loginForm.value.email && !this.loginForm.value.password){
      alert("Please fill all the details")
    }
    else{
      this.abc = this.loginForm.value;
      this.auth.login(this.abc).subscribe((res)=>{
        console.log(res)
        const {token}= res;
        const {result}= res;
        console.log(token)
        localStorage.setItem("token",token)
        console.log("123123",result.password)
        // this.router.navigate(['/dashboard'])
        // this.loginForm.reset()

        setTimeout(()=>{
          this.router.navigate(['/dashboard'])
        })
      })
  
      // IMPORTANT CODE
  
      // this.abc.role = this.selectedValue;
      // console.log("99999999999", this.abc)
      // console.log("444444",this.loginForm.value)
      // console.log(this.selectedValue)
      
    }



  }

  emailFormControl = new FormControl('', [Validators.required, Validators.email]);

  brands = [
    { value: 'HR', viewValue: 'HR' },
    { value: 'CEO', viewValue: 'CEO' },
    { value: 'MANAGER', viewValue: 'MANAGER' },
    { value: 'EMPLOYEE', viewValue: 'EMPLOYEE' },
  ];
  // hello(){
  //   console.log("hello world")
  // }




}

