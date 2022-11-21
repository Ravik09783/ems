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
  totalEmployee:any=  JSON.parse(localStorage.getItem('allEmployees') || '{}');
  role:any;
  constructor(
    private router:Router,
    private auth: AuthService
  ) { }

  ngOnInit(): void {
   this.roleID= localStorage.getItem('role_id')

  }
  logout(){
    localStorage.removeItem("token")
    this.router.navigate(['/login'])

  }

  punchIn(){
    console.log(new Date().toLocaleString());
  }




  
}
