import { Component, OnInit } from '@angular/core';
import { MessageServiceService } from 'src/app/public/core/services/message/message-service.service';
import { UserServiceService } from 'src/app/public/core/services/user/user-service.service';


@Component({
  selector: 'app-my-messages',
  templateUrl: './my-messages.component.html',
  styleUrls: ['./my-messages.component.css']
})
export class MyMessagesComponent implements OnInit {

  // Messages list
  public messagesList: any[] = [];
  // Date for searching
  public dateToSearch:any = '';
  public dateGiven: Date = new Date;
  // User data
  public userData: any;

  constructor(
    private messageService : MessageServiceService,
    private userService : UserServiceService,
  ) {/** */}

  ngOnInit() {
    this.userService.user$.subscribe((data:any) => {
      if (data) {
        this.userData = data;
        this.onGetMessages()
      }
    })
  }

  /**
   * On get messages
   * NOTA: No alcanzó el tiempo para desarrollar bien el filtro por fecha.
   */
  onGetMessages() {

    // Comentario puesto a propósito para demostrar captura de fecha
    console.log('FECHA: ', this.dateGiven)

    this.messageService.onGetMessages({ limit: 10, page: 1, by_title: '', by_date: this.dateToSearch }, this.userData._id).subscribe({
      next: (data:any) => {
        if (data.success) {
          this.messagesList = data.data
        }
      }
    })
  }


}
