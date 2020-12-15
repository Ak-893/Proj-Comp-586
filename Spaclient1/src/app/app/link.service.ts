import { Injectable } from '@angular/core';
import {HttpClient, HttpClientModule} from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LinkService {
readonly APIUrl = "http://localhost:63271/api";

  constructor(private http:HttpClient) { }

  getResList(): Observable<any[]>{
    return this.http.get<any>(this.APIUrl + '/restaurant');
  }

  addRestaurant(val:any){
    return this.http.post(this.APIUrl + '/restaurant', val);
  }

  changeRestaurant(val: any){
    return this.http.put(this.APIUrl + '/restaurant/', val);
  }

  removeRestaurant(val: any){
    return this.http.delete(this.APIUrl + '/restaurant/' +val);
  }

  getMealList(): Observable<any[]>{
    return this.http.get<any>(this.APIUrl + '/meal');
  }

  // tslint:disable-next-line:typedef
  addMeal(val: any){
    return this.http.post(this.APIUrl + '/meal', val);
  }

  // tslint:disable-next-line:typedef
  changeMeal(val: any){
    return this.http.put(this.APIUrl + '/meal/', val);
  }

  // tslint:disable-next-line:typedef
  removeMeal(val: any){
    return this.http.delete(this.APIUrl + '/meal/' +val);
  }

  getAllRestaurants(): Observable<any[]>{
  return this.http.get<any>(this.APIUrl + '/Meal/GetAllRestaurants');
}
}

