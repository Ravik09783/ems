import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { EmployeesService } from 'src/app/services/employees.service';
import {FormControl, Validators,FormGroup} from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';
@Component({
  selector: 'app-emp-edit',
  templateUrl: './emp-edit.component.html',
  styleUrls: ['./emp-edit.component.css']
})
export class EmpEditComponent implements OnInit {

  editForm= new FormGroup({
    name: new FormControl(''),
    email:new FormControl(''),
    employee_id: new FormControl(''),
    designation_id :new FormControl(''),
    department_id :new FormControl(''),
    employee_status_id :new FormControl(''),
    gender :new FormControl(''),
    about_me :new FormControl(''),
    contact_number :new FormControl(''),
    emergency_contact_number :new FormControl(''),
    address :new FormControl(''),
    date_of_birth :new FormControl(''),
    role_id :new FormControl(''),
    password :new FormControl(''),
    // profile_picture :new FormControl(''),


  })

  constructor(
    private route:ActivatedRoute,
    private empService: EmployeesService,
    private auth:AuthService,
    private router: Router
  ) { }

  
  allroles:any;
  currentParamID!:number;


 


  ngOnInit(): void {
    this.allroles = JSON.parse(localStorage.getItem('allRoles') || '{}');

   this.currentParamID = this.route.snapshot.params['id']
   console.log("param id:",this.currentParamID)

   this.empService.employeeData(this.currentParamID).subscribe((res:any)=>{
    console.log("Hey", res)

    
    this.editForm= new FormGroup({
      name: new FormControl(res['name']),
    email:new FormControl(res['email']),
    employee_id: new FormControl(res['employee_id']),
    designation_id :new FormControl(res['desiganation_id']),
    department_id :new FormControl(res['department_id']),
    employee_status_id :new FormControl(res['employee_status_id']),
    gender :new FormControl(res['gender']),
    about_me :new FormControl(res['about_me']),
    contact_number :new FormControl(res['contact_number']),
    emergency_contact_number :new FormControl(res['emergency_contact_number']),
    address :new FormControl(res['address']),
    date_of_birth :new FormControl(res['date_of_birth']),
    role_id :new FormControl(res['role_id']),
    password :new FormControl(res['password']),
    // profile_picture :new FormControl(['profile_picture']),
    })





   })




  }

  updateEmployee(){
    console.log(this.editForm.value)
    this.empService.updateEmployeeInfo(this.currentParamID, this.editForm.value).subscribe((res)=>console.log("7777777777",res))
  }
}
