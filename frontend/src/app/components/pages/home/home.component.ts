import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
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

    activatedRoute.params.subscribe((param:any) => {

      if(param.searchTerm)        
        this.foods = this.foodService.getAllFoodsBySearchTerm(param.searchTerm); 
      else if(param.tag)
        this.foods = this.foodService.getAllFoodsByTag(param.tag);     
      else
        this.foods = foodService.getAllFoods();

    })

  }

  ngOnInit(): void {
  }

}
