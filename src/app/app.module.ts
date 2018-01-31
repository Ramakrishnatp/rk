import { BrowserModule } from '@angular/platform-browser';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { HttpModule } from '@angular/http';
import { AppComponent } from './app.component';
import { HeaderComponentComponent } from './masterlayout/header-component/header-component.component';
import { SidemenuComponentComponent } from './masterlayout/sidemenu-component/sidemenu-component.component';
import { MasterComponentComponent } from './masterlayout/master-component/master-component.component';
import { DashboardPageComponent } from './pages/dashboard-page/dashboard-page.component';
import { LoginPageComponent } from './pages/login-page/login-page.component';
import { ApiServicesService } from './api/api-services.service';
import { GrowlModule } from 'primeng/primeng';
import { UsersPageComponent } from './pages/users-page/users-page.component';
import { DepartmentPageComponent } from './pages/department-page/department-page.component';
import { RolesPageComponent } from './pages/roles-page/roles-page.component';
import { DocumentsPageComponent } from './pages/documents-page/documents-page.component';
import { AddDepartmentComponent } from './pages/add-department/add-department.component';
import { AddRoleComponent } from './pages/add-role/add-role.component';
import { AddUserComponent } from './pages/add-user/add-user.component';

const appRoutes: Routes = [

  { path: 'Dash', component: DashboardPageComponent },
  { path: 'Users', component: UsersPageComponent },
  { path: 'AddUser', component: AddUserComponent },
  { path: 'Departments', component: DepartmentPageComponent },
  { path: 'AddDepartment', component: AddDepartmentComponent },
  { path: 'Roles', component: RolesPageComponent },
  { path: 'AddRole', component: AddRoleComponent },
  { path: 'Documents', component: DocumentsPageComponent },
];
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponentComponent,
    SidemenuComponentComponent,
    MasterComponentComponent,
    DashboardPageComponent,
    LoginPageComponent,
    UsersPageComponent,
    DepartmentPageComponent,
    RolesPageComponent,
    DocumentsPageComponent,
    AddDepartmentComponent,
    AddRoleComponent,
    AddUserComponent
  ],
  imports: [
    FormsModule, ReactiveFormsModule, HttpModule, GrowlModule,
    BrowserModule, RouterModule.forRoot(appRoutes)
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  providers: [ApiServicesService],
  bootstrap: [AppComponent]
})
export class AppModule { }
