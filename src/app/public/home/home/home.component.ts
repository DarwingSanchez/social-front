import { Component, OnInit } from '@angular/core';
import { MessageServiceService } from '../../core/services/message/message-service.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {


  public whatToSearchInput: string = '';
  public messagesList: any[] = [];
  // Used to avoid searching for results while user typing
  public typingTimer: any;

  constructor(
    private messageService : MessageServiceService
  ) {/** */}

  ngOnInit() {
    this.onGetMessages()
  }

  /**
   * On get messages
   */
  onGetMessages() {
    this.messageService.onGetMessages({ limit: 10, page: 1, by_title: this.whatToSearchInput, by_date: '' }, null).subscribe({
      next: (data:any) => {
        if (data.success) {
          this.messagesList = data.data
        }
      }
    })
  }

  onIntervalSearch() {
    clearTimeout(this.typingTimer);
    this.typingTimer = setTimeout(() => this.onGetMessages(), 500)
  }

}
