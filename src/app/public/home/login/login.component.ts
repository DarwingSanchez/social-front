import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { FormControl, FormGroup } from '@angular/forms';
import { UtilServiceService } from '../../core/services/util/util-service.service';
import { UserServiceService } from '../../core/services/user/user-service.service';
import { CookieService } from 'ngx-cookie-service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  public email = new FormControl();
  public password = new FormControl();
  public showPassword: boolean = false;
  public invalid: boolean = false;


  public formGroup = new FormGroup({
    email: this.email,
    password: this.password
  });

  constructor(
    private utilServiceService : UtilServiceService,
    private userServiceService : UserServiceService,
    private cookieService : CookieService,
    private router : Router
  ) {/** */}

  onLogin() {
    this.invalid = false;
    // Info validation
    if (this.formGroup.invalid) {
      this.invalid = true;
      return
    };

    if (!this.utilServiceService.onCheckEmail(this.formGroup.value.email) || !this.utilServiceService.onCheckPassword(this.formGroup.value.password)) {
      this.invalid = true;
      return
    }

    this.userServiceService.onLogin({ email: this.formGroup.value.email, password: this.formGroup.value.password }).subscribe({
      next: (data:any) => {
        if (!data.success) {
          this.invalid = true;
          return
        }

        this.cookieService.set('token', JSON.stringify(data.token));
        this.cookieService.set('user', JSON.stringify(data.user));
        this.userServiceService.onSetUserObservable(data.user);

        this.router.navigate([''])
      },
      error: error => {
        console.error('Could not login user');
        this.invalid = true;
      }
    })

  }

  /**
   * Show password
   */
  onShowPassword() {
    this.showPassword = !this.showPassword
  }

}
