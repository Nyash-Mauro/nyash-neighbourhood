import { Component, OnInit } from '@angular/core';  
import { AuthService } from '../hood/auth.service';
import { Router } from '@angular/router';
import { LoginService } from '../hood/login.service';
import { User } from '../hood/user.model';



@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  error: any;
  user: User;
  

  constructor(public loginService: LoginService,
    private authService: AuthService,private router: Router) { }

  ngOnInit(): void {

  }

  signup(email: string, username: string, password: string) {
    console.log('username,password,email ', username,password,email);

    this.authService.signup(username,password,password,email).subscribe(
      (success) => {
        this.router.navigate(['/neighbourhood']);
      },
      (error) => (this.error = error)
    );
  }
}