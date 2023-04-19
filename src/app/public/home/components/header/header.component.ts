import { Component, OnInit } from '@angular/core';
import { UserServiceService } from 'src/app/public/core/services/user/user-service.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  public isLoggedIn = false
  public userData: any;
  public onPrincipalMenu: boolean = false

  constructor(
    private userService : UserServiceService,
    private router : Router
  ) {/** */}

  ngOnInit() {
    this.userService.user$.subscribe((data:any) => {
      if (data) {
        this.userData = data;
        this.isLoggedIn = true
      } else {
        this.isLoggedIn = false;
      }
    })
  }

  /**
   * Opens and close principal menu
   */
  onOpenPrincipalMenu() {
    this.onPrincipalMenu = !this.onPrincipalMenu
  }

  /**
   * Logout user
   */
  logout() {
    this.onPrincipalMenu = false;
    this.userService.onLogout();
  }

  /**
   * Redirect user to internal routing
   * @param url | '/home'
   */
  onRouter(url:string) {
    this.router.navigate([url])
  }
}
