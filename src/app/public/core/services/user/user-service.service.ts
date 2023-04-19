import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject } from 'rxjs';
import { CookieService } from 'ngx-cookie-service';

@Injectable({
  providedIn: 'root'
})
export class UserServiceService {

  private URL_API = `${environment.HOST}/api`

  /** Observable and subscriber for user existence basic information */
  private user = new BehaviorSubject<any>(null)
  public user$ = this.user.asObservable()

  constructor(
    private router :Router,
    private http: HttpClient,
    private cookieService : CookieService
  ) { }


  /**
   * Login a user
   * @param user | { email: string, password: string }
   * @returns
   */
  onLogin(user: { email: string, password: string }) {
    return this.http.post(`${this.URL_API}/user/login_user`, user)
  }

  onLogout() {
    this.cookieService.deleteAll();
    this.onSetUserObservable(null);
    this.router.navigate(['/login']);
  }

  /**
   * Set the information into a observable for global access
   * @param user | User object
   */
  onSetUserObservable(user: any) {
    this.user.next(user);
  }

  onCheckExistingUser() {
    let userCookie = this.cookieService.get('user');
    let tokenCookie = this.cookieService.get('token');

    if (!tokenCookie || !userCookie) {
      this.onSetUserObservable(null)
      this.cookieService.deleteAll();
      this.router.navigate(['/login'])
      return
    }

    let userObject = JSON.parse(userCookie);
    this.onSetUserObservable(userObject);
  }

}
