import { Injectable } from '@angular/core';
import { Subject } from 'rxjs/Subject';
import { Restaurant } from './restaurant.model';

@Injectable()
export class RestaurantService{

  restaurantChanged = new Subject<Restaurant[]>();

  private restaurants: Restaurant[]=[
    new Restaurant("Primul restaurant", "Descrierea pentru primul restaurant", "https://cluj-wpengine.netdna-ssl.com/assets/hugo-restaurant-cluj-750x380.jpg"),
    new Restaurant("Al doilea restaurant", "Descriere pentru al doile", "https://media-cdn.tripadvisor.com/media/photo-s/0a/15/ea/7e/bistro-sorriso-cluj-napoca.jpg"),
    new Restaurant("Al treilea restaurant", "Descrire pentru al treilea restaurabt", "http://www.la-cina.ro/pics_restaurant/4.jpg")
  ];

  getRestaurants(){
    return this.restaurants.slice();
  }

  setRestaurants(restaurants: Restaurant[]){
    this.restaurants = restaurants;
    this.restaurantChanged.next(this.restaurants.slice());
  }
}
