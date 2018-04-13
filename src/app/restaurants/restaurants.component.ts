import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs/Subscription';

import { Restaurant } from './restaurant.model';
import { RestaurantService } from './restaurant.service';
import { DataStorageService } from '../shared/data-storage.service';

@Component({
  selector: 'app-restaurants',
  templateUrl: './restaurants.component.html',
  styleUrls: ['./restaurants.component.css']
})
export class RestaurantsComponent implements OnInit, OnDestroy {
  restaurants: Restaurant[];
  subscription: Subscription;

  constructor(
    private restaurantService: RestaurantService,
    private dataStorageService: DataStorageService) { }

  ngOnInit() {
    this.dataStorageService.getRestaurants();
    this.subscription = this.restaurantService.restaurantChanged.subscribe(
      (restaurants: Restaurant[]) => {
        this.restaurants = restaurants;
      }
    );
    this.restaurants = this.restaurantService.getRestaurants();
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

}
