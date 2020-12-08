import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Business } from 'src/app/models/business';
import { BusinessService } from 'src/app/services/business.service';

@Component({
  selector: 'app-business',
  templateUrl: './business.component.html',
  styleUrls: ['./business.component.css']
})
export class BusinessComponent implements OnInit {

  businesses:Business[];
  error: any;
  

  
  

  getBusinesses(): void{
    this.businessService.getBusiness().subscribe((data: Business[]) => {
      this.businesses = data;
      
    });
  }

  constructor(private businessService:BusinessService, private _route: ActivatedRoute) { }

  ngOnInit(): void {
    this.getBusinesses()
    
  }

}
