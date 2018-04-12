import { Injectable } from '@angular/core';
import { Place } from './place.model';

@Injectable()
export class PlaceService {

  private places: Place[] = [
    new Place("Primul obiectiv","Descrierea primului obiectiv","https://img.huffingtonpost.com/asset/5a339c5d1600003d00c501dd.jpg?ops=scalefit_820_noupscale"),
    new Place("Cel de-al doilea obiectiv","Descrierea celui de-al doilea obiectiv.","https://www.romanianfriend.com/uploads/media/20161211_151611-frontend-gallery-image.jpeg"),
    new Place("Al treile obiectiv","Cel mai obiectiv dintre obiective","https://www.romanianfriend.com/uploads/media/cluj_napoca_1-frontend-gallery-image.jpeg")
  ];

  getPlaces(){
    return this.places.slice();
  }

}
