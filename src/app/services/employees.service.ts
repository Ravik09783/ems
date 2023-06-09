import { HttpClient , HttpHeaders} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class EmployeesService {

  employees = environment.employee;
  accessToken = localStorage.getItem('access_token');

  constructor(
    private http:HttpClient
  ) { }



    // To get all Employee List
    employeeList(){

      var header = {
        headers: new HttpHeaders().set(
          'Authorization',
          `Bearer ${this.accessToken}`
        ),
      };

      return this.http.get(this.employees,header)
    }



    // To get Particular Employee Data
      employeeData(id:number){
        
      var header = {
        headers: new HttpHeaders().set(
          'Authorization',
          `Bearer ${this.accessToken}`
        ),
      };

      return this.http.get(`${this.employees}/${id}`,header)
        
      }




    // To Delete particular Employee
    deleteEmployee(id:number){

      var header = {
        headers: new HttpHeaders().set(
          'Authorization',
          `Bearer ${this.accessToken}`
        ),
      };

      return this.http.delete(`${this.employees}/${id}`,header)

    }


    updateEmployeeInfo(id:number, data:any){
      var header = {
        headers: new HttpHeaders().set(
          'Authorization',
          `Bearer ${this.accessToken}`
        ),
      };
      data._method = "PUT";
      delete data['password']
      console.log("Required Fields", data)
      // console.log("FFFFFF", data)
      // console.log("FFFFFF", header)

      return this.http.post(`${this.employees}/${id}`,data, header)

    }


    
    addEmployeeInfo( data:any){
      var header = {
        headers: new HttpHeaders().set(
          'Authorization',
          `Bearer ${this.accessToken}`
        ),
      };
      
     
     

      return this.http.post(`${this.employees}`,data, header)

    }



}
