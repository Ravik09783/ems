import { Component, OnInit } from '@angular/core';
import { login } from 'src/app/modals/modals';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  constructor(
    private auth: AuthService
  ) { }

  profileData!:any;

  ngOnInit(): void {
      this.profileData = JSON.parse(localStorage.getItem('personalUserData') || '{}').map((res:login)=>res);
   
  }

}
