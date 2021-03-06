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

  signup( user_name: string,email: string, password: string,confirm_password:string) {
    console.log('username,password,email,confirm_password ', user_name,email,password,confirm_password);

    this.authService.signup(user_name,email,password,confirm_password).subscribe(
      (success) => {
        this.router.navigate(['/login']);
      },
      (error) => (this.error = error)
    );
  }
}