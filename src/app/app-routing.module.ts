import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NeighbourhoodComponent } from './components/neighbourhood/neighbourhood.component';
import { ProfileComponent } from './components/profile/profile.component';
import { LoginComponent } from './login/login.component';
import { LogoutComponent } from './logout/logout.component';
import { RegisterComponent } from './register/register.component';
// import { AuthGuard } from './guards/auth-guard.service';

const routes: Routes = [

  {path: '', redirectTo: 'login', pathMatch:'full'},
  {path: 'neighbourhood', component: NeighbourhoodComponent,},
  { path: 'register', component: RegisterComponent},

  {path: 'profile', component: ProfileComponent},


  { path: 'login', component: LoginComponent },
  { path: 'logout', component: LogoutComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
