import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from 'src/app/services/auth.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuardGuard implements CanActivate {
  constructor(
    private auth:AuthService,
    private router: Router
  ){}
  canActivate(){
    if(this.auth.isLoggedIn()){
      alert("Logged in Successful")
      return true;
    }
    else
    alert("Please login first")
    {this.router.navigate(['login'])
    return false;}
  }
  
}
