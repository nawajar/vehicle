import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OrderListComponent } from './order-list.component';
import { OrderService } from '../Service/order.service';
import { FormBuilder } from '@angular/forms';
import { of } from 'rxjs';
import { Orders } from '../Models/orders.model';

describe('OrderListComponent', () => {
  let orderService: OrderService;
  let component: OrderListComponent;
  let fb: FormBuilder;

  beforeEach(() => {
    fb = new FormBuilder();
    orderService = new OrderService();
    component = new OrderListComponent(orderService, fb);
  });

  describe('NgOnInit', () => {
    beforeEach(() => {
      component.getOrder = jest.fn();
    });
    it('should get order', () => {
      component.ngOnInit();
      expect(component.getOrder).toHaveBeenCalled();
    });
  });

  describe('GetOrders', () => {
    beforeEach(() => {
      orderService.getOrder = jest.fn().mockReturnValue(of({}));
      component.calculateSummary = jest.fn();
    });

    it('should get order form service', () => {
      component.getOrder();
      expect(orderService.getOrder).toHaveBeenCalled();
    });

    it('should assign order reponse to order list', () => {
      const order = [new Orders()];
      orderService.getOrder = jest.fn().mockReturnValue(of(order));

      component.getOrder();

      expect(component.orderList).toBe(order);
    });

    it('should calculate order list', () => {
      const order = [new Orders()];
      orderService.getOrder = jest.fn().mockReturnValue(of(order));

      component.getOrder();

      expect(component.calculateSummary).toHaveBeenCalledWith(order);
    });
  });
});
