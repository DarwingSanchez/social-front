import { Component, OnInit } from '@angular/core';
import { UserServiceService } from 'src/app/public/core/services/user/user-service.service';
import { MessageServiceService } from 'src/app/public/core/services/message/message-service.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create-message',
  templateUrl: './create-message.component.html',
  styleUrls: ['./create-message.component.css']
})
export class CreateMessageComponent implements OnInit {

  // Nows when form is invalid
  public invalid: boolean = false;
  // User data
  public userData: any;

  // Building object for request
  public messageRender = {
    titleMessage: '',
    message: '',
    creator: {
      fullUserName: ''
    },
    createdAt: new Date()
  }

  constructor(
    private UserService : UserServiceService,
    private MessageService : MessageServiceService,
    private router : Router
  ) {/** */}

  ngOnInit() {
    this.UserService.user$.subscribe((data:any) => {
      if (data) {
        this.userData = data
        this.messageRender.creator.fullUserName = data.fullUserName
      }
    })
  }

  /**
   * Creates a message
   * @returns
   */
  onCreate() {
    this.invalid = false;
    if (!this.messageRender.titleMessage || !this.messageRender.message) {
      this.invalid = true;
      return
    };

    this.MessageService.onCreateMessage({ titleMessage: this.messageRender.titleMessage, message: this.messageRender.message, creatorId: this.userData._id })
      .subscribe({
        next: (data:any) => {
          if (!data || !data.success) {
            this.invalid = true;
            return
          }
          this.router.navigate(['/my-messages'])
        },
        error: error => {
          this.invalid = true;
        }
      })

  }

}
