import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';


import { AppComponent } from './app.component';
import { PlacesComponent } from './places/places.component';
import { RestaurantsComponent } from './restaurants/restaurants.component';
import { AppRoutingModule } from './app-routing.module';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';
import { SleepComponent } from './sleep/sleep.component';
import { PlaceService } from './places/place.service';
import { PlaceComponent } from './places/place/place.component';
import { RestaurantService } from './restaurants/restaurant.service';
import { DataStorageService } from './shared/data-storage.service';
import { RestaurantComponent } from './restaurants/restaurant/restaurant.component';


@NgModule({
  declarations: [
    AppComponent,
    PlacesComponent,
    RestaurantsComponent,
    HeaderComponent,
    HomeComponent,
    SleepComponent,
    PlaceComponent,
    RestaurantComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AppRoutingModule
  ],
  providers: [
    PlaceService,
    RestaurantService,
    DataStorageService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
