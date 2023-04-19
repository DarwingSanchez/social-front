import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment';
import { CookieService } from 'ngx-cookie-service';




@Injectable({
  providedIn: 'root'
})
export class MessageServiceService {

  private URL_API = `${environment.HOST}/api`


  constructor(
    private router :Router,
    private http: HttpClient,
    private cookieService : CookieService
  ) {/** */}


  /**
   * Gets messages depending on querys.
   * @param query
   * @returns
   */
  onGetMessages(query: { limit: number | 0, page: number | 1, by_title: string | '', by_date: string | '' }, user_id: any) {
    let headers = new HttpHeaders().append('Authorization', this.cookieService.get('token').replace(/['"]+/g, ''));
    let queryParams = new HttpParams().set('limit', query.limit).set('page', query.page).set('by_title', query.by_title).set('by_date', query.by_date)
    let url = user_id ? `get_messages/${user_id}` : 'get_all_messages'
    return this.http.get(`${this.URL_API}/message/${url}`, { headers: headers, params: queryParams })
  }

  /**
   * Message creator function
   * @param message | Object with necessary parameters to create a message
   * @returns
   */
  onCreateMessage(message: { titleMessage: string, message: string, creatorId: string }) {
    let headers = new HttpHeaders().append('Authorization', this.cookieService.get('token').replace(/['"]+/g, ''));
    return this.http.post(`${this.URL_API}/message/create_message/${message.creatorId}`, message ,{ headers: headers })
  }
}
