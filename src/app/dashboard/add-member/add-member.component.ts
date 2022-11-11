import { Component, OnInit } from '@angular/core';
import {FormControl, Validators,FormGroup} from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-add-member',
  templateUrl: './add-member.component.html',
  styleUrls: ['./add-member.component.css']
})
export class AddMemberComponent implements OnInit {

  constructor(
    private router:Router,
    private auth: AuthService
  ) { }

  brand:any;
  ngOnInit(): void {
    this.auth.roles().subscribe((res:any)=>
    {
      console.log(res)
      const {roles}= res;
      this.brand = roles;
      this.brand= this.brand.data
      console.log("this.brand", this.brand)
    }
    )
  }
  selectedValue!:string;
  // cpassword!:string;
  cpassword!: string;
  abc:any;
  // brands = [
  //   { value: 'HR', viewValue: 'HR' },
  //   { value: 'CEO', viewValue: 'CEO' },
  //   { value: 'MANAGER', viewValue: 'MANAGER' },
  //   { value: 'EMPLOYEE', viewValue: 'EMPLOYEE' },
  // ];



  signupForm= new FormGroup({
    email: new FormControl("", Validators.required),
    password: new FormControl("", Validators.required),
    password_confirmation: new FormControl("", Validators.required),
    name: new FormControl("", Validators.required),
    // lname: new FormControl("", Validators.required),
    // address: new FormControl("", Validators.required),
    // designation: new FormControl("", Validators.required),
  })


  onKey(event:any) {
    this.cpassword = event.target.value;
  }


  onSubmit(){

    if(
      this.signupForm.value.password==this.signupForm.value.password_confirmation 
      && this.signupForm.value.name 
      && this.signupForm.value.password
      && this.signupForm.value.email)
      {
        console.log(this.signupForm.value)
        this.abc= this.signupForm.value;
        this.abc.role = this.selectedValue
 
        const a = document.getElementById("cpassword")
        console.log(this.cpassword)
        console.log(this.signupForm.value.password)
        console.log("ANSWER",this.abc)
        this.brand.map((res:any)=>{ if(res.name==this.selectedValue){
          this.abc.role_id= res.id
        }})

        console.log("ANSWER22222222",this.abc)
      }
      else{
        this.signupForm.reset()
        alert("Form is not filled/password doest matched") 
      }



  }

 
  emailFormControl = new FormControl('', [Validators.required, Validators.email]);

}
