import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';
import { DialogBoxComponent } from './dialog-box/dialog-box.component';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  toggling:boolean= this.auth.toggling;
  constructor(
    private auth:AuthService,
    private router:Router,
    private dialog:MatDialog
  ) { }

  openDialog(){
    const dialogRef = this.dialog.open(DialogBoxComponent,{})
    
  }

  ngOnInit(): void {
  }
  toggle(){
    this.toggling = !this.toggling
  }
  logout(){
    localStorage.clear()
    this.router.navigate(['../login'])
  }

}
