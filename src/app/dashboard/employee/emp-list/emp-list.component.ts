import { Component, OnInit } from '@angular/core';
import {MatTableDataSource} from '@angular/material/table';
import { Router } from '@angular/router';
import { login } from 'src/app/modals/modals';
import { EmployeesService } from 'src/app/services/employees.service';


@Component({
  selector: 'app-emp-list',
  templateUrl: './emp-list.component.html',
  styleUrls: ['./emp-list.component.css']
})
export class EmpListComponent implements OnInit {

  constructor(
    private empService: EmployeesService,
    private router: Router
  ) { }

  allEmp!:any;

  EmployeeList!:any;

  ngOnInit(): void {

    this.empService.employeeList().subscribe((res)=>{
      this.EmployeeList = res
      this.EmployeeList = this.EmployeeList.data
      console.log("$$$$$$$$$", this.EmployeeList)
    })

    

    this.allEmp = JSON.parse(localStorage.getItem('allEmployees') || '{}');


  }

  EditEmployee(id:number){
    console.log(id)
    this.router.navigate([`./dashboard/emp-edit/${id}`])

  }

  DeleteEmployee(id:number){
    console.log(id)

    this.empService.deleteEmployee(id).subscribe((res)=>res)
    this.ngOnInit()

  }


}
