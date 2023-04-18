import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SignInComponent } from './public/home/sign-in/sign-in.component';
import { LoginComponent } from './public/home/login/login.component';
import { HomeComponent } from './public/home/home/home.component';
import { CreateMessageComponent } from './public/home/profile/create-message/create-message.component';
import { MyMessagesComponent } from './public/home/profile/my-messages/my-messages.component';
import { MessageComponent } from './public/home/components/message/message.component';
import { HeaderComponent } from './public/home/components/header/header.component';

@NgModule({
  declarations: [
    AppComponent,
    SignInComponent,
    LoginComponent,
    HomeComponent,
    CreateMessageComponent,
    MyMessagesComponent,
    MessageComponent,
    HeaderComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
