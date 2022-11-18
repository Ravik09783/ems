import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
import {MatTreeFlatDataSource, MatTreeFlattener} from '@angular/material/tree';
import {FlatTreeControl} from '@angular/cdk/tree';



@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.css']
})

export class SidenavComponent implements OnInit {

  items = ['Employee'];
  expandedIndex = 0;
  role_id:any;
  constructor(
    private auth:AuthService
    ){}
  ngOnInit(){
    this.role_id = localStorage.getItem('role_id')
    
  }

}
