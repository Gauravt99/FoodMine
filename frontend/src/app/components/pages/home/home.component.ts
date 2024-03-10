import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { FoodService } from 'src/app/services/food.service';
import { Food } from 'src/app/shared/models/food';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit{

  foods : Food[] = [];

  constructor(private foodService : FoodService, activatedRoute: ActivatedRoute){

    let foodsObervable : Observable<Food[]>;

    activatedRoute.params.subscribe((param:any) => {

      if(param.searchTerm)        
        foodsObervable = this.foodService.getAllFoodsBySearchTerm(param.searchTerm); 
      else if(param.tag)
        foodsObervable = this.foodService.getAllFoodsByTag(param.tag);     
      else
        foodsObervable = foodService.getAllFoods();

        foodsObervable.subscribe((foodData)=>{
          this.foods = foodData;
        });
    })

  }

  ngOnInit(): void {
  }

}
