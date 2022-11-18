import { Component, OnInit } from '@angular/core';
import { login } from 'src/app/modals/modals';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  // roles:any;
  constructor(
    private auth: AuthService
  ) { }

  profileData!:any;

  ngOnInit(): void {
      console.log("PROFILE DATA FROM LOCAL STORAGE",localStorage.getItem('personalUserData'))
      // this.profileData = localStorage.getItem( JSON.parse('personalUserData')) 
  
      this.profileData = JSON.parse(localStorage.getItem('personalUserData') || '{}').map((res:login)=>res);
      // console.log("............",this.profileData)
   
  }

}
