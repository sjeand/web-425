/*
==========================================
  Title: enhanced secure profile app
  Author: Professor Krasso
  Modifier: Sarah Jean Baptiste
  Date: 08/19/2021
  Description: module
==========================================
*/

// Import statements
import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})

//export class
export class SignInGuard implements CanActivate {

  constructor(private router: Router) { }

  // canActivate Guard -logged in gets access, if not logged it return to sign in page.
  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {

    let isLoggedIn = next.queryParams.isLoggedIn;

    if(isLoggedIn) {
      return true;
    } else {
      this.router.navigate(['/']);
      return false;
    }
  }

}
