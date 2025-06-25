import { NgModule, provideBrowserGlobalErrorListeners } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing-module';
import { App } from './app';
import { AdminTemplate } from './admin-template/admin-template';
import {MatToolbar, MatToolbarModule} from '@angular/material/toolbar';
import {MatButton, MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';
import {MatMenu, MatMenuItem, MatMenuModule, MatMenuTrigger} from '@angular/material/menu';
import {MatDrawerContainer, MatSidenavModule} from '@angular/material/sidenav';
import {MatDivider, MatListItem, MatNavList} from '@angular/material/list';
import { Home } from './home/home';
import { Profile } from './profile/profile';
import { Login } from './login/login';
import { Dashboard } from './dashboard/dashboard';
import { Students } from './students/students';
import { Payments } from './payments/payments';
import {MatCard, MatCardContent, MatCardHeader, MatCardModule, MatCardTitle} from '@angular/material/card';
import { LoadStudents } from './load-students/load-students';
import { LoadPayments } from './load-payments/load-payments';
import {MatTable, MatTableModule} from '@angular/material/table';
import {MatDividerModule} from '@angular/material/divider';
import {MatPaginatorModule} from '@angular/material/paginator';
import {MatSortModule} from '@angular/material/sort';
import {MatFormField, MatInput} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';

@NgModule({
  declarations: [
    App,
    AdminTemplate,
    Home,
    Profile,
    Login,
    Dashboard,
    Students,
    Payments,
    LoadStudents,
    LoadPayments
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatToolbarModule,
    MatButtonModule,
    MatIconModule,
    MatMenuModule,
    MatMenuTrigger,
    MatSidenavModule,
    MatMenuItem,
    MatDrawerContainer,
    MatNavList,
    MatListItem,
    MatCardModule,
    MatCardHeader,
    MatCardTitle,
    MatCardContent,
    MatDividerModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule,
    MatInput,
    MatFormFieldModule
  ],
  providers: [
    provideBrowserGlobalErrorListeners()
  ],
  bootstrap: [App]
})
export class AppModule { }
