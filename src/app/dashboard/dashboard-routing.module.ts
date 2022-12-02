import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NotFoundComponent } from '../authentication/not-found/not-found.component';
import { AddMemberComponent } from './add-member/add-member.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { EmpEditComponent } from './employee/emp-edit/emp-edit.component';
import { EmpListComponent } from './employee/emp-list/emp-list.component';
import { EmpProfileComponent } from './employee/emp-profile/emp-profile.component';
import { HomeComponent } from './home/home.component';
import { ProfileComponent } from './profile/profile.component';


const routes: Routes = [
    {
        path:'', 
        component:DashboardComponent,
        children: [
            {path:'', component:HomeComponent},
            {path:'profile', component:ProfileComponent},
            {path:'add-member', component:AddMemberComponent},
            {path:'emp-list', component:EmpListComponent},
            {path:'emp-edit/:id', component:EmpEditComponent},
            {path:'emp-profile/:id', component:EmpProfileComponent},
            {path:'**', component:NotFoundComponent},
        ]
    }
  
 
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardRoutingModule { }