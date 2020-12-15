import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {MealComponent} from './meal/meal.component';
import {RestaurantComponent} from './restaurant/restaurant.component';


const routes: Routes = [
{path:'meal',component:MealComponent},
{path:'restaurant',component:RestaurantComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
