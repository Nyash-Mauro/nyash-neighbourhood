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
  
    login(user_name: string, password: string) {
      console.log('user_name, password ', user_name, password);
  
      this.loginService.login(user_name, password).subscribe(
        (success) => {
          this.router.navigate(['/neighbourhood']);
        },
        (error) => (this.error = error)
      );
    }
  }