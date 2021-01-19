import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class OrderService {

  constructor() { }

  getOrder(): string[] {
    return ['a', 'b', 'c'];
  }
}
