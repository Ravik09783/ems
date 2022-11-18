import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { login } from '../modals/modals';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  link = environment.baseUrl;
  Register = environment.register;
  empLists = environment.empList
  toggling: boolean = true;
  constructor(private http: HttpClient) {}



  login(data: login) {
    return this.http.post<login>(this.link, data);
  }

  // roles(){
  //  let header = new HttpHeaders().set(
  //     "access_token",
  //      localStorage.getItem("access_token")
  //   );
  //   return this.http.get(environment.rolesURL,{headers:header})
  // }

  accessToken = localStorage.getItem('access_token');
  roles() {
    var header = {
      headers: new HttpHeaders().set(
        'Authorization',
        `Bearer ${this.accessToken}`
      ),
    };

    return this.http.get(environment.rolesURL, header);
  }

  isLoggedIn() {
    // const tempToken = localStorage.getItem('access_token');

    return !!localStorage.getItem('access_token');
  }

  register(data: any) {
    var header = {
      headers: new HttpHeaders().set(
        'Authorization',
        `Bearer ${this.accessToken}`
      ),
    };
    return this.http.post<any>(this.Register, data, header);
  }

  empList() {
    var header = {
      headers: new HttpHeaders().set(
        'Authorization',
        `Bearer ${this.accessToken}`
      ),
    };
    return this.http.get(this.empLists, header)
  }
}
