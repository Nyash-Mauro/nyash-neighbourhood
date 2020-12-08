import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { LoginService } from 'src/app/hood/login.service';
import { User } from 'src/app/hood/user.model';
import { Neighbourhood } from 'src/app/models/neighbourhood';

@Component({
  selector: 'app-neighbourhood',
  templateUrl: './neighbourhood.component.html',
  styleUrls: ['./neighbourhood.component.css']
})
export class NeighbourhoodComponent implements OnInit {
  showForm=false;
  showUsers=false;
  createForm = false;
  businessList = false;
  createBusiness = false;
  neighbourhoods:Neighbourhood[];
  user:User;
  
  deletingNeighbourhood(deleteNeighbourhood, index){
    if(deleteNeighbourhood){
        let toDelete =confirm("Are you sure you want to delete this Neighbourhood?")

        if(toDelete){
            this.neighbourhoods.splice(index)
        }
    }
}

  showBusinessList(){
    this.businessList = !this.businessList
  }
  showBusiness(){
    this.createBusiness = !this.createBusiness
  }
  showDetails() {
    this.showForm = !this.showForm
    
  }  
  showUsersList(){
    this.showUsers= !this.showUsers
  }

  showCreationform(){
    this.createForm = !this.createForm
  }

  constructor(private userService: LoginService ,private http:HttpClient ) { }

  ngOnInit(){
      this.showForm = false;
      this.showUsers =false;
      this.createForm = false;
     this.userService.login;
    
  }

}
