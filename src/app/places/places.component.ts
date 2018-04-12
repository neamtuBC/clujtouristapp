import { Component, OnInit } from '@angular/core';
import { Response } from '@angular/http';

import { Place } from './place.model';
import { PlaceService } from './place.service';
import { DataStorageService } from '../shared/data-storage.service';

@Component({
  selector: 'app-places',
  templateUrl: './places.component.html',
  styleUrls: ['./places.component.sass']
})
export class PlacesComponent implements OnInit {
  places: Place[];

  constructor(
    private placeService: PlaceService,
    private dataStorageService: DataStorageService) { }

  ngOnInit() {
    this.places = this.placeService.getPlaces();
  }

  addPlacesToDb(){
    this.dataStorageService.storePlaces().subscribe(
      (response: Response) => {
        console.log(response);
      }
    );
  }

}
