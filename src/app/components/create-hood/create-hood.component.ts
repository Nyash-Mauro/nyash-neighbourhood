import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Neighbourhood } from 'src/app/models/neighbourhood';
import { NeighbourhoodService } from 'src/app/services/neighbourhood.service';

@Component({
  selector: 'app-create-hood',
  templateUrl: './create-hood.component.html',
  styleUrls: ['./create-hood.component.css']
})
export class CreateHoodComponent implements OnInit {
  error: any;
  newneighbourhoods: Neighbourhood[];

  addNeighbourhood(name: string, occupants: number, location: string, contact: number, definition: string, admin:number) {
   
    this.neighbourhoodService.createNeighbourhood(name,occupants,location,contact, definition,admin).subscribe(
      (success) => {
        alert('New neighbourhood created');
      },
      (error) => ((this.error = error), alert('Creation error'))
    );
  }



  constructor(private neighbourhoodService: NeighbourhoodService, private _route: ActivatedRoute) { }

  ngOnInit(): void {
    this.addNeighbourhood
  }

}
