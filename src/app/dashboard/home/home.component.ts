import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';
import {MatTableDataSource} from '@angular/material/table';
import { HttpClient } from '@angular/common/http';
import { EmployeesService } from 'src/app/services/employees.service';






@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  roleID!:any;
  totalDepartment!:number;
  totalEmployee!:any;
  role:any;
  constructor(
    private router:Router,
    private auth: AuthService,
    private http:HttpClient,
    private empService: EmployeesService
  ) { }

  ngOnInit(): void {
   this.roleID= localStorage.getItem('role_id')
   this.empService.employeeList().subscribe((res)=>{
    this.totalEmployee = res;
    this.totalEmployee = this.totalEmployee.data.length

  })

  }
  logout(){
    localStorage.removeItem("token")
    this.router.navigate(['/login'])

  }

  punchIn(){
    console.log(new Date().toLocaleString());
    this.http.get('http://api.ipify.org/?format=json')
    .subscribe((res)=>console.log(res))
  }




  
}
