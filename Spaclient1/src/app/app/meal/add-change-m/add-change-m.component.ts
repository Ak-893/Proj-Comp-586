import { Component, Input, OnInit } from '@angular/core';
import {LinkService} from 'src/app/link.service';

@Component({
  selector: 'app-add-change-m',
  templateUrl: './add-change-m.component.html',
  styleUrls: ['./add-change-m.component.css']
})
export class AddChangeMComponent implements OnInit {

  constructor(private service:LinkService) { }

  @Input() m:any;
  MealID:string;
  MealTYPE:string;
  Restaurant:string;
  MealCreationDate:string;
  RestaurantsList:any[];

  ngOnInit(): void {
    
  }

  loadRestaurantList(){
    this.service.getAllRestaurants().subscribe((storage:any)=>{
    this.RestaurantsList=storage;
    this.MealID=this.m.MealTYPE;
    this.MealTYPE=this.m.MealTYPE;
    this.Restaurant=this.m.Restaurant;
    this.MealCreationDate=this.m.MealCreationDate;
    });
  }
  

  addMeal(){
   
    var val = {MealID:this.MealID,
      MealTYPE:this.MealTYPE,
      Restaurant:this.Restaurant,
      MealCreationDate:this.MealCreationDate    
    };
    this.service.addMeal(val).subscribe(m=>{
      alert(m.toString());
    });
  }

}