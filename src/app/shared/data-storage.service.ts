import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

import { PlaceService } from '../places/place.service';

@Injectable()
export class DataStorageService {
  constructor(private http: Http, private placeService: PlaceService){}

  storePlaces(){
    return this.http.put('https://clujtouristapp.firebaseio.com/places.json', this.placeService.getPlaces());
  }
}
