import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PlacesComponent } from './places/places.component';
import { RestaurantsComponent } from './restaurants/restaurants.component';
import { HomeComponent } from './home/home.component';
import { SleepComponent } from './sleep/sleep.component';

const appRoutes: Routes = [
  { path: 'places', component: PlacesComponent},
  { path: 'restaurants', component: RestaurantsComponent},
  { path: 'home', component: HomeComponent},
  { path: 'sleep', component: SleepComponent},
  { path: '', redirectTo: '/home', pathMatch: 'full'}
];

@NgModule({
  imports:[RouterModule.forRoot(appRoutes)],
  exports:[RouterModule]
})
export class AppRoutingModule {

}
