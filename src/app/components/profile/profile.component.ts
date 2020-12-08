import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { Admin } from 'src/app/models/admin';
import { ProfileService } from 'src/app/services/profile.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  admin:Admin[];

  getProfile(): void {
    // this.users = this.homeService.getUsers();
    this.profileService.getAdminProfile().subscribe((data: Admin[]) => {
      this.admin = data;
      console.log('this.users', this.admin);
    });
  }
  constructor(private profileService: ProfileService,
    private toastr: ToastrService) { }

  ngOnInit(): void {
    this.getProfile
    this.profileService.getAdminProfile()
  }

}
