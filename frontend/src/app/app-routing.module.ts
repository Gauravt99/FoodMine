import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/pages/home/home.component';
import { FoodPageComponent } from './components/pages/food-page/food-page.component';

const routes: Routes = [
  {
    path: '',
    component : HomeComponent
  },
  {
    path: 'search/:searchTerm',
    component: HomeComponent
  },
  {
    path: 'food/:id',
    component: FoodPageComponent
  },
  {
    path: 'tag/:tag',
    component: HomeComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {useHash: true})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
