import { Injectable } from '@angular/core';
import { Food } from '../shared/models/food';
import { sample_foods, sample_tags } from '../../data';
import { Tag } from '../shared/models/tag';

@Injectable({
  providedIn: 'root'
})
export class FoodService {

  constructor() { }

  getAllFoods() : Food[]{
    return sample_foods
  }

  getAllFoodsBySearchTerm(searchTerm : string){
    return this.getAllFoods().filter((item:Food) => item.name.toLocaleLowerCase().includes(searchTerm.toLocaleLowerCase()));
  }

  getFoodById(id : string): Food{ 
    return this.getAllFoods().find((food : Food) =>  food.id == id ) ?? new Food();
  }

  getAllTags(): Tag[] {
    return sample_tags;
  }

  getAllFoodsByTag(tag: string): Food[] {
    return tag === "All" ?
      this.getAllFoods() :
      this.getAllFoods().filter(food => food.tags?.includes(tag));
  }

}
