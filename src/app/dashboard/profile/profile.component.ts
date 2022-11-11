import { Component, OnInit } from '@angular/core';
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

  ngOnInit(): void {
    // this.auth.roles().subscribe((res)=>console.log("Profile",res))
    // console.log(localStorage.getItem('access_token'))
    this.auth.roles().subscribe((res:any)=>{
      // this.roles= res;
      //  console.log("AAAAAAAAA",res.roles);       ****
        // const {roles} = res;
     })
    // const {roles}= this.roles;
    // console.log(this.roles)


  }

}
