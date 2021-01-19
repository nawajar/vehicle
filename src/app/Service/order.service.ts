import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Orders } from '../Models/orders.model';

@Injectable({
  providedIn: 'root'
})
export class OrderService {

  constructor() { }

  getOrder(): Observable<Orders[]> {
    const order = new Orders();
    order.id = 2;
    order.amount = 10;
    order.name = 'test order 2';
    order.qty = 10;
    order.orderDate = new Date().toISOString();

    return of([{...order , id: 1}, order, {...order}]);
  }
}
