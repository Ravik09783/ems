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
    if(localStorage.getItem('access_token') && localStorage.getItem('role')){
      this.router.navigate(['./dashboard'])
    }
    // this.auth.print()
    // this.auth.roles().subscribe((res)=>console.log("Hello",res))
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
      this.auth.login(this.abc).subscribe((res:any)=>{
        console.log("RESULT",res)
        // console.log("RES_______",res)
        const {access_token}= res;
        const {user} = res;
        console.log("User", user.id)
        localStorage.setItem("role", user.id)
        // const {result}= res;
        console.log(access_token)
        localStorage.setItem("access_token",access_token)
        // console.log("123123",result.password)
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

