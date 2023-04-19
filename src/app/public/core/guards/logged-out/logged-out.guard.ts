import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';
import jwtDecode from 'jwt-decode';

@Injectable({
  providedIn: 'root'
})
export class LoggedOutGuard implements CanActivate {

  constructor(
    private router : Router,
    private cookieService : CookieService
  ) {/** */}

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {

    // User saved on cookie
    const userCookie = this.cookieService.get('user');
    // Token saved on cookie
    const tokenCookie = this.cookieService.get('token');

    if (!userCookie || !tokenCookie) {
      this.cookieService.deleteAll()
      return true
    };

    this.router.navigate(['/'])
    return false;
  }

}
