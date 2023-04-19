import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';
import jwtDecode from 'jwt-decode';


@Injectable({
  providedIn: 'root'
})
export class LoggedInGuard implements CanActivate {

  constructor(
    private router : Router,
    private cookieService : CookieService
  ) {/** */}

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {

    let isValid: boolean = true;

    // User saved on cookie
    let userCookie: any = this.cookieService.get('user');
    // Token saved on cookie
    let tokenCookie: any = this.cookieService.get('token');

    if (!userCookie || !tokenCookie) { this.router.navigate(['/login']); return false };

    userCookie = JSON.parse(userCookie);
    tokenCookie = JSON.parse(tokenCookie)


    let currentToken: any = jwtDecode(tokenCookie);

    if (!currentToken) { this.router.navigate(['/login']); return false};

    if (userCookie._id != currentToken.user._id) { this.router.navigate(['/login']); return false};

    return isValid;
  }

}
