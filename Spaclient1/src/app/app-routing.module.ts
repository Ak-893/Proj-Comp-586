import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {HomeComponent} from './home/home.component';
import {MealComponent} from './meal/meal.component';
import {RestaurantComponent} from './restaurant/restaurant.component';


const routes: Routes = [
{path:'meal',component:MealComponent},
{path:'restaurant',component:RestaurantComponent},
{path:'home',component:HomeComponent},
{path:'**',redirectTo:'home'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
