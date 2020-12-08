import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../hood/auth.service';
import { LogoutService } from '../hood/logout.service';
@Component({
  selector: 'app-logout',
  templateUrl: './logout.component.html',
  styleUrls: ['./logout.component.css'],
})
export class LogoutComponent implements OnInit {
  constructor(
    public logoutService: LogoutService,
    private authService: AuthService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.authService.logout();
    this.logout();
    this.router.navigate(['/login']);
  }

  logout() {
    console.log('logout clicked ');
    this.logoutService.changeLogoutState(true);
  }
}