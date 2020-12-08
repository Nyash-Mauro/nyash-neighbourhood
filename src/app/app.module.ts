import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {HttpClientModule} from '@angular/common/http';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavBarComponent } from './components/nav-bar/nav-bar.component';
import { NeighbourhoodComponent } from './components/neighbourhood/neighbourhood.component';
import { PostFormComponent } from './components/post-form/post-form.component';
import { UsersComponent } from './components/users/users.component';
import { ToastrModule } from 'ngx-toastr';
import { FormsModule } from '@angular/forms';



import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { LogoutComponent } from './logout/logout.component';
import { CreateHoodComponent } from './components/create-hood/create-hood.component';
import { ProfileComponent } from './components/profile/profile.component';
import { BusinessComponent } from './components/business/business.component';
import { CreateBusinessComponent } from './components/create-business/create-business.component';
import { FooterComponent } from './components/footer/footer.component';

@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    NeighbourhoodComponent,
    PostFormComponent,
    UsersComponent,
    RegisterComponent,
    LoginComponent,
    LogoutComponent,
    CreateHoodComponent,
    ProfileComponent,
    BusinessComponent,
    CreateBusinessComponent,
    FooterComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    HttpClientModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot(),
    
    FormsModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
