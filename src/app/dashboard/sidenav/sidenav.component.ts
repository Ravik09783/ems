import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.css']
})
export class SidenavComponent implements OnInit {
  toggling:boolean= this.auth.toggling;
  constructor(
    private auth:AuthService
  ) { }

  ngOnInit(){
    this.toggle()
  }
  role = localStorage.getItem('role')
  toggle(){
    this.toggling = !this.toggling
    console.log(this.toggling)
  }
}
