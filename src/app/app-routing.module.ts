import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './public/home/home/home.component';
import { LoginComponent } from './public/home/login/login.component';
import { LoggedInGuard } from './public/core/guards/logged-in/logged-in.guard';
import { MyMessagesComponent } from './public/home/profile/my-messages/my-messages.component';
import { LoggedOutGuard } from './public/core/guards/logged-out/logged-out.guard';
import { CreateMessageComponent } from './public/home/profile/create-message/create-message.component';
import { SignInComponent } from './public/home/sign-up/sign-up.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent, canActivate: [LoggedInGuard]},
  { path: 'my-messages', component: MyMessagesComponent, canActivate: [LoggedInGuard]},
  { path: 'create-message', component: CreateMessageComponent, canActivate: [LoggedInGuard]},
  { path: 'login', component: LoginComponent, canActivate: [LoggedOutGuard]},
  { path: 'sign-up', component: SignInComponent, canActivate: [LoggedOutGuard]},

  { path: '', redirectTo: 'home', pathMatch: 'full'},
  { path: "**", redirectTo: "home" },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
