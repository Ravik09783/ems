import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {environment} from '../../environments/environment'
import { login } from '../modals/modals';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient) { }
  link=environment.baseUrl;

login(data:login){
  return this.http.post<login>(this.link,data)
}
  







isLoggedIn(){
  const tempToken = localStorage.getItem('token');
  
  return !!localStorage.getItem("token")
}

}

