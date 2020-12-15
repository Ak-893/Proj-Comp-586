import { Component, OnInit } from '@angular/core';
import {LinkService} from 'src/app/link.service';


@Component({
  selector: 'app-display-m',
  templateUrl: './display-m.component.html',
  styleUrls: ['./display-m.component.css']
})
export class DisplayMComponent implements OnInit {

  constructor(private service:LinkService) { }

  MealList:any=[];
  ModalTitle:string;
  ActivateAddChangeMComp:boolean=false;
  m:any;

  ngOnInit(): void {
    this.refreshMealList();
  }

  addClick() {
    this.m={
      MealtID:0,
      MealTYPE:"",
      Restaurant:"",
      MealCreationDate:""
    }
    this.ModalTitle="Add Meal";
    this.ActivateAddChangeMComp=true;
  }

  editClick(item) {
    this.m=item;
    this.ModalTitle="Edit Meal";
    this.ActivateAddChangeMComp=true;
  }

  deleteClick(item) {
    if(confirm('delete entry?')) {
      this.service.removeMeal(item.MealID).subscribe(storage=> {
        alert(storage.toString());
        this.refreshMealList();
      })
    }
  }
  
  closeClick() {
    this.ActivateAddChangeMComp=false;
    this.refreshMealList();
  }

  refreshMealList(){
    this.service.getMealList().subscribe(storage=>{
      this.MealList=storage;
    });
  }

}
