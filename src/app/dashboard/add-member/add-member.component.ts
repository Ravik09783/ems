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
  profilePic:any;
  role_id!:any;
  allroles:any;
  ngOnInit(): void {

    this.role_id = JSON.parse(localStorage.getItem('role_id') || '{}');
    this.allroles = JSON.parse(localStorage.getItem('allRoles') || '{}');
  }
  selectedValue!:string;
  cpassword!: string;
  abc:any;

  signupForm= new FormGroup({
    email: new FormControl("", Validators.required),
    password: new FormControl("", Validators.required),
    password_confirmation: new FormControl("", Validators.required),
    gender: new FormControl("", Validators.required),
    status: new FormControl("", Validators.required),
    address: new FormControl("", Validators.required),
    name: new FormControl("", Validators.required),
    department: new FormControl("", Validators.required),

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
        this.abc= this.signupForm.value;
        this.abc.role = this.selectedValue
 
        const a = document.getElementById("cpassword")
        this.brand.map((res:any)=>{ if(res.name==this.selectedValue){
          this.abc.role_id= res.id
        }})

        delete this.abc['role']
        this.auth.register(this.abc).subscribe((res)=>{console.log(res)})

      }
      else{
        alert("Form is not filled/password doest matched") 
      }



  }


  fileupload(event:any){
    this.profilePic = event.target.value
  }
 
  emailFormControl = new FormControl('', [Validators.required, Validators.email]);

}
