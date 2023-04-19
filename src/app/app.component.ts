import { Component, OnInit } from '@angular/core';
import { UserServiceService } from './public/core/services/user/user-service.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'social-front';

  constructor(
    private userService : UserServiceService
  ) {/** */}

  ngOnInit(): void {
    this.userService.onCheckExistingUser()
  }
}
