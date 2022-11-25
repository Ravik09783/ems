import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { EmployeesService } from 'src/app/services/employees.service';

@Component({
  selector: 'app-emp-edit',
  templateUrl: './emp-edit.component.html',
  styleUrls: ['./emp-edit.component.css']
})
export class EmpEditComponent implements OnInit {

  constructor(
    private route:ActivatedRoute,
    private empService: EmployeesService
  ) { }

  ngOnInit(): void {
    console.log(this.route.snapshot.params['id'])
    this.empService.employeeData(this.route.snapshot.params['id']).subscribe((res)=>console.log("Particular Emp data:", res))

  }

}
