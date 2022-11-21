import { Component, OnInit } from '@angular/core';
import {MatTableDataSource} from '@angular/material/table';
import { login } from 'src/app/modals/modals';


@Component({
  selector: 'app-emp-list',
  templateUrl: './emp-list.component.html',
  styleUrls: ['./emp-list.component.css']
})
export class EmpListComponent implements OnInit {

  constructor() { }

  allEmp!:any;

  ngOnInit(): void {

    this.allEmp = JSON.parse(localStorage.getItem('allEmployees') || '{}');


  }


}
