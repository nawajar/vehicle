import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OrderListComponent } from './order-list.component';
import { OrderService } from '../Service/order.service';

describe('OrderListComponent', () => {
  let orderService: OrderService;
  let component: OrderListComponent;

  beforeEach(() => {
    orderService = new OrderService();
    component = new OrderListComponent(orderService);
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
