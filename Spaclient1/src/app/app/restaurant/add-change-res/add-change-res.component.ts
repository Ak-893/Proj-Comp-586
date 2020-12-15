import { Component, Input, OnInit } from '@angular/core';
import {LinkService} from 'src/app/link.service';

@Component({
  selector: 'app-add-change-res',
  templateUrl: './add-change-res.component.html',
  styleUrls: ['./add-change-res.component.css']
})
export class AddChangeResComponent implements OnInit {

  constructor(private service:LinkService) { }

  @Input() res:any;
  RestaurantID:string;
  RestaurantTYPE:string;

  ngOnInit(): void {
    this.RestaurantID=this.res.RestaurantID;
    this.RestaurantTYPE=this.res.RestaurantTYPE;
  }

  addRestaurant(){
   
    var val = {RestaurantID:this.RestaurantID,
                RestaurantTYPE:this.RestaurantTYPE};
    this.service.addRestaurant(val).subscribe(res=>{
      alert(res.toString());
    });
  }

  updateRestaurant(){
    var val = {RestaurantID:this.RestaurantID,
      RestaurantTYPE:this.RestaurantTYPE};
this.service.changeRestaurant(val).subscribe(res=>{
alert(res.toString());
});

  }

}
