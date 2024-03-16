import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Order } from '../shared/models/order';
import { environment } from 'src/environments/environment.development';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class OrderService {

  
  apiURL : any = '';

  constructor(private http:HttpClient) {
    this.apiURL = environment.apiUrl;
  }

  create(order:Order){
    return this.http.post<Order>(`${this.apiURL}/orders/create`, order);
  }
  
  getNewOrderForCurrentUser():Observable<Order>{
    return this.http.get<Order>(`${this.apiURL}/orders/newOrderForCurrentUser`);
  }

  pay(order:Order):Observable<string>{
    return this.http.post<string>(`${this.apiURL}/orders/pay`,order);
  }

  trackOrderById(id:number): Observable<Order>{
    return this.http.get<Order>(`${this.apiURL}/orders/track/` + id);
  }

}
