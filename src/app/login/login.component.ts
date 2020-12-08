import { Component, OnInit } from '@angular/core';
import { AuthService } from '../hood/auth.service';
import { LoginService } from '../hood/login.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  error: any;

  constructor(public loginService: LoginService,
    private authService: AuthService,
    private router: Router) { }

    ngOnInit(): void {

    }
  
    login(username: string, password: string) {
      console.log('username, password ', username, password);
  
      this.loginService.login(username, password).subscribe(
        (success) => {
          this.router.navigate(['/neighbourhood']);
        },
        (error) => (this.error = error)
      );
    }
  }