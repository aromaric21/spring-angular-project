import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {Home} from './home/home';
import {Profile} from './profile/profile';
import {Login} from './login/login';
import {LoadStudents} from './load-students/load-students';
import {LoadPayments} from './load-payments/load-payments';
import {Dashboard} from './dashboard/dashboard';
import {Students} from './students/students';
import {Payments} from './payments/payments';
import {AdminTemplate} from './admin-template/admin-template';
import {authGuard} from './guards/auth-guard';
import {StudentDetails} from './student-details/student-details';
import {NewPayment} from './new-payment/new-payment';
import {authorizationGuard} from './guards/authorization-guard';

const routes: Routes = [
  {path: "", component: Login},
  {path: "login", component: Login},
  {path: "admin", component: AdminTemplate,
    canActivate: [authGuard],
    children: [
      {path: "home", component: Home},
      {path: "profile", component: Profile},
      {path: "dashboard", component: Dashboard},
      {path: "students", component: Students},
      {path: "payments", component: Payments},
      {path: "student-details/:code", component: StudentDetails},
      {path: "new-payment/:studentCode", component: NewPayment},
      {path: "loadStudents", component: LoadStudents},
      {path: "loadPayments", component: LoadPayments},
    ]},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
