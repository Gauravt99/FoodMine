import { Injectable } from '@angular/core';
import { Food } from '../shared/models/food';
import { sample_foods, sample_tags } from '../../data';
import { Tag } from '../shared/models/tag';
import { environment } from 'src/environments/environment.development';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FoodService {

  apiURL : any = '';

  constructor(private http:HttpClient) {
    this.apiURL = environment.apiUrl;
  }

  getAllFoods() : Observable<Food[]>{
    return this.http.get<Food[]>(`${this.apiURL}/foods`)
    //return sample_foods
  }

  getAllFoodsBySearchTerm(searchTerm : string){
    return this.http.get<Food[]>(`${this.apiURL}/foods/search/${searchTerm}`);
    //return this.getAllFoods().filter((item:Food) => item.name.toLocaleLowerCase().includes(searchTerm.toLocaleLowerCase()));
  }

  getFoodById(id : string): Observable<Food>{ 
    return this.http.get<Food>(`${this.apiURL}/foods/${id}`);
    //return this.getAllFoods().find((food : Food) =>  food.id == id ) ?? new Food();
  }

  getAllTags(): Observable<Tag[]> {
    return this.http.get<Tag[]>(`${this.apiURL}/foods/tags`);
    //return sample_tags;
  }

  getAllFoodsByTag(tag: string): Observable<Food[]> {
    return this.http.get<Food[]>(`${this.apiURL}/foods/tag/${tag}`);
    // return tag === "All" ?
    //   this.getAllFoods() :
    //   this.getAllFoods().filter(food => food.tags?.includes(tag));
  }

}
