/*
==========================================
  Title: secure profile app
  Author: Professor Krasso
  Modifier: Sarah Jean Baptiste
  Date: 08/19/2021
  Description: module
==========================================
*/

// Import statements
import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { SigninComponent } from './signin/signin.component';

// Export routes
export const AppRoutes: Routes = [
  {
    path: '',
    component: SigninComponent
  },
  {
    path: 'home',
    component: HomeComponent
  }
]
