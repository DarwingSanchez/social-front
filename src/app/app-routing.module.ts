import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './public/home/home/home.component';
import { LoginComponent } from './public/home/login/login.component';
import { LoggedInGuard } from './public/core/guards/logged-in/logged-in.guard';
import { LoggedOutGuard } from './public/core/guards/logged-out/logged-out.guard';

const routes: Routes = [
  { path: 'home', component: HomeComponent, canActivate: [LoggedInGuard]},
  /* { path: 'login', component: LoginComponent, canActivate: [LoggedOutGuard]}, */

  { path: '', redirectTo: 'home', pathMatch: 'full'},
  { path: "**", redirectTo: "home" },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
