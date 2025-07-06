import { NgModule, provideBrowserGlobalErrorListeners } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing-module';
import { App } from './app';
import { AdminTemplate } from './admin-template/admin-template';
import { MatToolbarModule} from "@angular/material/toolbar";
import { MatButtonModule} from '@angular/material/button';
import { MatIconModule} from '@angular/material/icon';
import { MatMenuModule, MatMenuTrigger} from '@angular/material/menu';
import { MatDrawer, MatDrawerContainer, MatDrawerContent} from '@angular/material/sidenav';
import { MatListItem, MatListModule} from '@angular/material/list';
import { Home } from './home/home';
import { Profile } from './profile/profile';
import { Login } from './login/login';
import { LoadStudents } from './load-students/load-students';
import { LoadPayments } from './load-payments/load-payments';
import { Payments } from './payments/payments';
import { Students } from './students/students';
import { Dashboard } from './dashboard/dashboard';
import {MatCardModule} from '@angular/material/card';
import {MatFormFieldModule} from '@angular/material/form-field';
import { MatInputModule} from '@angular/material/input';
import {ReactiveFormsModule} from '@angular/forms';
import {authGuard} from './guards/auth-guard';
import {authorizationGuard} from './guards/authorization-guard';

@NgModule({
  declarations: [
    App,
    AdminTemplate,
    Home,
    Profile,
    Login,
    LoadStudents,
    LoadPayments,
    Payments,
    Students,
    Dashboard
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatToolbarModule,
    MatButtonModule,
    MatIconModule,
    MatMenuModule,
    MatMenuTrigger,
    MatDrawerContainer,
    MatListModule,
    MatListItem,
    MatDrawer,
    MatDrawerContent,
    MatCardModule,
    MatFormFieldModule,
    MatInputModule,
    ReactiveFormsModule,
  ],
  providers: [
    provideBrowserGlobalErrorListeners(), authGuard, authorizationGuard
  ],
  bootstrap: [App]
})
export class AppModule { }
