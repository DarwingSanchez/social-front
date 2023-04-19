import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { CookieService } from 'ngx-cookie-service';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SignInComponent } from './public/home/sign-up/sign-up.component';
import { LoginComponent } from './public/home/login/login.component';
import { HomeComponent } from './public/home/home/home.component';
import { CreateMessageComponent } from './public/home/profile/create-message/create-message.component';
import { MyMessagesComponent } from './public/home/profile/my-messages/my-messages.component';
import { MessageComponent } from './public/home/components/message/message.component';
import { HeaderComponent } from './public/home/components/header/header.component';
import { FormatDatePipe } from './public/core/pipes/format-date.pipe';

@NgModule({
  declarations: [
    AppComponent,
    SignInComponent,
    LoginComponent,
    HomeComponent,
    CreateMessageComponent,
    MyMessagesComponent,
    MessageComponent,
    HeaderComponent,
    FormatDatePipe,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [CookieService],
  bootstrap: [AppComponent]
})
export class AppModule { }
