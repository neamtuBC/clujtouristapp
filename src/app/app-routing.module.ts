import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PlacesComponent } from './places/places.component';
import { RestaurantsComponent } from './restaurants/restaurants.component';

const appRoutes: Routes = [
  { path: 'places', component: PlacesComponent},
  { path: 'restaurants', component: RestaurantsComponent},
  { path: '', redirectTo: '/places', pathMatch: 'full'}
];

@NgModule({
  imports:[RouterModule.forRoot(appRoutes)],
  exports:[RouterModule]
})
export class AppRoutingModule {

}
