import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dialog-box',
  templateUrl: './dialog-box.component.html',
  styleUrls: ['./dialog-box.component.css']
})
export class DialogBoxComponent implements OnInit {

  constructor(
    private navigate:Router,
   

  ) { }

  ngOnInit( ): void {
  }


  logout(){
    localStorage.clear();
    this.navigate.navigate(['../login'])
  }
}
