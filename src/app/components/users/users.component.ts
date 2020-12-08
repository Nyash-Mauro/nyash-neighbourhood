import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { UserService } from '../../services/user.service';
import { User } from '../../models/user';
@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {
  users: User[];

  getUsers(): void {
    // this.users = this.homeService.getUsers();
    this.userService.getUsers().subscribe((data: User[]) => {
      this.users = data;
      console.log('this.users', this.users);
    });
  }

  constructor(
    private userService: UserService,
    private toastr: ToastrService

  ) { }

  ngOnInit() {
    this.getUsers();
  }

}
