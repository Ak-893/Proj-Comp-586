import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RestaurantComponent } from './restaurant/restaurant.component';
import { DisplayResComponent } from './restaurant/display-res/display-res.component';
import { AddChangeResComponent } from './restaurant/add-change-res/add-change-res.component';
import { MealComponent } from './meal/meal.component';
import { DisplayMComponent } from './meal/display-m/display-m.component';
import { AddChangeMComponent } from './meal/add-change-m/add-change-m.component';
import {LinkService} from './link.service';


import {HttpClientModule} from '@angular/common/http';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { HomeComponent } from './home/home.component';
import { OAuthModule } from 'angular-oauth2-oidc';


@NgModule({
  declarations: [
    AppComponent,
    RestaurantComponent,
    DisplayResComponent,
    AddChangeResComponent,
    MealComponent,
    DisplayMComponent,
    AddChangeMComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    OAuthModule.forRoot()
  ],
  providers: [LinkService],
  bootstrap: [AppComponent]
})
export class AppModule { }