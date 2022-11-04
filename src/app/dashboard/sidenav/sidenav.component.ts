import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.css']
})
export class SidenavComponent implements OnInit {
  toggling:boolean= false;
  constructor() { }

  ngOnInit(): void {
  }

  toggle(){
    this.toggling = !this.toggling
    console.log(this.toggling)
  }
}
