import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { ProfileComponent } from './profile/profile.component';
import { DashboardRoutingModule } from './dashboard-routing.module';
import { DashboardComponent } from './dashboard/dashboard.component';
import { SidenavComponent } from './sidenav/sidenav.component';
import { HeaderComponent } from './header/header.component';
import { AddMemberComponent } from './add-member/add-member.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import { MatButtonModule } from '@angular/material/button';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatInput, MatInputModule } from '@angular/material/input';
import { MatCardModule } from '@angular/material/card';
import {MatGridListModule} from '@angular/material/grid-list';
import {MatTableModule} from '@angular/material/table';
import {MatTreeModule} from '@angular/material/tree';
import {MatIconModule} from '@angular/material/icon';
import {CdkAccordionModule} from '@angular/cdk/accordion';
import { EmpListComponent } from './employee/emp-list/emp-list.component';
import { EmpProfileComponent } from './employee/emp-profile/emp-profile.component';
import { EmpEditComponent } from './employee/emp-edit/emp-edit.component';
import {MatDialogModule} from '@angular/material/dialog';
import { DialogBoxComponent } from './header/dialog-box/dialog-box.component';
import { SnackbarModule } from 'ngx-snackbar';
import { HttpClientModule } from '@angular/common/http';
@NgModule({
  declarations: [
    HomeComponent,
    ProfileComponent,
    DashboardComponent,
    SidenavComponent,
    HeaderComponent,
    AddMemberComponent,
    EmpListComponent,
    EmpProfileComponent,
    EmpEditComponent,
    DialogBoxComponent,
   
  ],
  imports: [
    CommonModule,
    DashboardRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    MatFormFieldModule,
    MatSelectModule,
    MatButtonModule,
    FlexLayoutModule,
    MatInputModule,
    MatCardModule,
    MatGridListModule,
    MatButtonModule,
    MatTableModule,
    MatTreeModule,
    MatIconModule,
    CdkAccordionModule,
    MatDialogModule,
    ReactiveFormsModule,
    HttpClientModule,
    SnackbarModule.forRoot(),

  ]
})
export class DashboardModule { }
