import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';

import { Place } from '../places/place.model';
import { PlaceService } from '../places/place.service';
import { Restaurant } from '../restaurants/restaurant.model';
import { RestaurantService } from '../restaurants/restaurant.service';

@Injectable()
export class DataStorageService {

  constructor(
    private http: Http,
    private placeService: PlaceService,
    private restaurantService: RestaurantService
  ){}

  storePlaces(){
    return this.http.put('https://clujtouristapp.firebaseio.com/places.json', this.placeService.getPlaces());
  }

  getPlaces(){
    this.http.get('https://clujtouristapp.firebaseio.com/places.json').subscribe(
      (response: Response) => {
        const places: Place[] = response.json();
        this.placeService.setPlaces(places);
      }
    );
  }

  getRestaurants(){
    this.http.get('https://clujtouristapp.firebaseio.com/restaurants.json').subscribe(
      (response: Response) => {
        const restaurants: Restaurant[] = response.json();
        this.restaurantService.setRestaurants(restaurants);
      }
    );
  }
}
