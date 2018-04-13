import { Component, OnInit, OnDestroy } from '@angular/core';
import { Response } from '@angular/http';
import { Subscription } from 'rxjs/Subscription';

import { Place } from './place.model';
import { PlaceService } from './place.service';
import { DataStorageService } from '../shared/data-storage.service';

@Component({
  selector: 'app-places',
  templateUrl: './places.component.html',
  styleUrls: ['./places.component.sass']
})
export class PlacesComponent implements OnInit, OnDestroy {
  places: Place[];
  subscription: Subscription;

  constructor(
    private placeService: PlaceService,
    private dataStorageService: DataStorageService) { }

  ngOnInit() {
    this.dataStorageService.getPlaces();
    this.subscription = this.placeService.placeChanged.subscribe(
      (places: Place[]) => {
        this.places = places;
      }
    );
    this.places = this.placeService.getPlaces();
  }

  addPlacesToDb(){
    this.dataStorageService.storePlaces().subscribe(
      (response: Response) => {
        //console.log(response);
      }
    );
  }

  getPlacesFromDb(){
    this.dataStorageService.getPlaces();
  }

  ngOnDestroy(){
    this.subscription.unsubscribe();
  }

}
