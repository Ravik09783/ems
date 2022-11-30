import { Component, Input, OnInit } from '@angular/core';
import {FormControl, Validators,FormGroup} from '@angular/forms';
import { FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';
import { HttpClient, HttpEventType } from '@angular/common/http';
import { Subscription, finalize } from 'rxjs';
import { EmployeesService } from 'src/app/services/employees.service';

@Component({
  selector: 'app-add-member',
  templateUrl: './add-member.component.html',
  styleUrls: ['./add-member.component.css']
})
export class AddMemberComponent implements OnInit {

  constructor(
    private router:Router,
    private auth: AuthService,
    private formBuilder:FormBuilder,
    private http:HttpClient,
    private empService: EmployeesService

  ) { }
  ngOnInit(): void {

  }

  addForm = new FormGroup({
    name: new FormControl('', Validators.required),
    role_id: new FormControl('', Validators.required),
    email: new FormControl('', Validators.required),
    password: new FormControl('', Validators.required),
    password_confirmation: new FormControl('', Validators.required),
    date_of_birth: new FormControl('', Validators.required),
    address: new FormControl('', Validators.required),
    contact_number: new FormControl('', Validators.required),
    emergency_contact_number: new FormControl('', Validators.required),
    employee_id: new FormControl('', Validators.required),
    designation_id: new FormControl('', Validators.required),
    department_id: new FormControl('', Validators.required),
    employee_status_id: new FormControl('', Validators.required),
    gender: new FormControl('', Validators.required),
    about_me: new FormControl('', Validators.required),

  })

  addEmployee(){
    const employeeData = this.addForm
    console.log(employeeData.value)
    this.empService.addEmployeeInfo(employeeData.value)
    .subscribe((res)=>console.log( "%%%%%%%%%%%%%%%%%%%%%%%%%%" ,res))

  }







}

