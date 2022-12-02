import { Component, OnInit } from '@angular/core';
import {FormControl, Validators,FormGroup} from '@angular/forms';
import { Router } from '@angular/router';
import { login } from 'src/app/modals/modals';
import { AuthService } from 'src/app/services/auth.service';
import { SnackbarService } from 'ngx-snackbar';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(
    private router:Router,
    private auth: AuthService,
    private snackbarService: SnackbarService
  ) { }

  ngOnInit(): void {
    if(localStorage.getItem('access_token') && localStorage.getItem('role_id')){
      this.router.navigate(['./dashboard'])
    }
  }

  addRole!:any;

    loginForm= new FormGroup({
    email: new FormControl("", Validators.required),
    password: new FormControl("", Validators.required),
    
  })

  onSubmit(){

    // console.log("*********",this.loginForm.value)

    if(!this.loginForm.value.email && !this.loginForm.value.password){
      alert("Please fill all the details")
    }
    else{

      this.addRole = this.loginForm.value;
      this.auth.login(this.addRole).subscribe((res:login)=>{
        console.log("Login Response:", res)                                 
        
        // console.log("response after login", res.personalUserData[0].id)

        const {access_token}= res;

        const {personalUserData} = res
        localStorage.setItem("personalUserData", JSON.stringify(personalUserData))


        if(personalUserData[0].role_id < 4){

          const {allEmployeeDepartments}=res
          localStorage.setItem("allEmployeeDepartments", JSON.stringify(allEmployeeDepartments))
          
          const {allEmployeeStatus}=res
          localStorage.setItem("allEmployeeStatus", JSON.stringify(allEmployeeStatus))
          
          const {allEmployees}=res
          localStorage.setItem("allEmployees", JSON.stringify(allEmployees))

          const {allRoles}=res
          localStorage.setItem("allRoles", JSON.stringify(allRoles))
        }

    

   
        localStorage.setItem("access_token",access_token)
        localStorage.setItem("role_id",res.personalUserData[0].role_id)
        // localStorage.setItem("allEmployees", res.allEmployees[0])
        console.log("res.personalUserData[0].role_id",typeof(res.personalUserData[0].role_id))
        
        this.router.navigate(['/dashboard'])

      })
  
    }




    // const _this = this;
    this.snackbarService.add({
      msg: '<strong>Login Success</strong>',
      timeout: 5000,
      action: {
        text: 'Close',
        onClick: (snack:any) => {
          console.log('dismissed: ' + snack.id);
          
          // _this.undo();
        },
      },
      onAdd: (snack:any) => {
        console.log('added: ' + snack.id);
      },
      onRemove: (snack:any) => {
        console.log('removed: ' + snack.id);
      }
    });














  }
  emailFormControl = new FormControl('', [Validators.required, Validators.email]);




  // add() {
  //   const _this = this;
  //   this.snackbarService.add({
  //     msg: '<strong>Message sent.</strong>',
  //     timeout: 5000,
  //     action: {
  //       text: 'Undo',
  //       onClick: (snack:any) => {
  //         console.log('dismissed: ' + snack.id);
          
  //         _this.undo();
  //       },
  //     },
  //     onAdd: (snack:any) => {
  //       console.log('added: ' + snack.id);
  //     },
  //     onRemove: (snack:any) => {
  //       console.log('removed: ' + snack.id);
  //     }
  //   });
  // }

  // clear() {
  //   this.snackbarService.clear();
  // }
  
  // undo() {
  // }




















}

