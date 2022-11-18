import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';
import {MatTableDataSource} from '@angular/material/table';






@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  roleID!:any;
  totalDepartment!:number;
  totalEmployee= localStorage.getItem('allEmployees')?.length
  role:any;
  constructor(
    private router:Router,
    private auth: AuthService
  ) { }

  ngOnInit(): void {
   this.roleID= localStorage.getItem('role_id')
  console.log(this.totalEmployee)

    // if(this.roleID <4){
    //   this.auth.roles().subscribe((res)=>{
    //     // this.totalDepartment= res.roles.data.length
    //     console.log("Total roles", res)
    //   })
       
    
    //   this.auth.roles().subscribe((res)=>{
    //     console.log("sideNav roles", res)
    //     this.role = res;
    //     this.role= this.role.roles.data.length
    //     console.log("sideNav roles data",this.role)
    //   })
    // }

  }
  logout(){
    console.log("Home component")
    localStorage.removeItem("token")
    this.router.navigate(['/login'])

  }

  punchIn(){
    console.log(new Date().toLocaleString());
  }




  
}
