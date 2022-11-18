import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  toggling:boolean= this.auth.toggling;
  constructor(
    private auth:AuthService,
    private router:Router
  ) { }

  ngOnInit(): void {
  }
  toggle(){
    this.toggling = !this.toggling
    console.log("form header",this.toggling)
  }
  logout(){
    // localStorage.removeItem('access_token');
    // localStorage.removeItem('role_id');
    localStorage.clear()
    this.router.navigate(['../login'])
  }

}
