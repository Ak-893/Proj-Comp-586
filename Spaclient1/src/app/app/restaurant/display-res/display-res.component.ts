import { Component, OnInit } from '@angular/core';
import {LinkService} from 'src/app/link.service';

@Component({
  selector: 'app-display-res',
  templateUrl: './display-res.component.html',
  styleUrls: ['./display-res.component.css']
})
export class DisplayResComponent implements OnInit {

  constructor(private service:LinkService) { }

  RestaurantList:any=[];

  ModalTitle:string;
  ActivateAddChangeResComp:boolean=false;
  res:any;

  ngOnInit(): void {
    this.refreshResList();
  }

  addClick() {
    this.res={
      RestaurantID:0,
      RestaurantTYPE:""
    }
    this.ModalTitle="Add Restaurant";
    this.ActivateAddChangeResComp=true;
  }

  editClick(item) {
    this.res=item;
    this.ModalTitle="Edit Restaurant";
    this.ActivateAddChangeResComp=true;
  }

  deleteClick(item) {
    if(confirm('delete entry?')) {
      this.service.removeRestaurant(item.RestaurantID).subscribe(storage=> {
        alert(storage.toString());
        this.refreshResList();
      })
    }
  }
  
  closeClick() {
    this.ActivateAddChangeResComp=false;
    this.refreshResList();
  }

  refreshResList(){
    this.service.getResList().subscribe(storage=>{
      this.RestaurantList=storage;
    });
  }

}
