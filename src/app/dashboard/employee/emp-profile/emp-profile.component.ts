import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { EmployeesService } from 'src/app/services/employees.service';

@Component({
  selector: 'app-emp-profile',
  templateUrl: './emp-profile.component.html',
  styleUrls: ['./emp-profile.component.css']
})
export class EmpProfileComponent implements OnInit {

  constructor(
    private route:ActivatedRoute,
    private empService:EmployeesService
  ) { }

  profileDetail:any;


  ngOnInit(): void {
    // console.log(this.route.snapshot.params['id'])
    this.empService.employeeData(this.route.snapshot.params['id']).subscribe((res)=>                                                                                              {
      this.profileDetail = res;
      // console.log("RRRRRR", this.profileDetail)
    })
    
  }

}
