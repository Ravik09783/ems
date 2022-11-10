import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NotFoundComponent } from '../authentication/not-found/not-found.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { HomeComponent } from './home/home.component';
import { ProfileComponent } from './profile/profile.component';


const routes: Routes = [
    {
        path:'', 
        component:DashboardComponent,
        children: [
            {path:'', component:HomeComponent},
            {path:'profile', component:ProfileComponent},
            {path:'**', component:NotFoundComponent}
        ]
    }
  
 
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardRoutingModule { }