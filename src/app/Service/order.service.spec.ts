import { TestBed } from '@angular/core/testing';

import { OrderService } from './order.service';

describe('OrderService', () => {
  let service: OrderService;

  beforeEach(() => {
    service = new OrderService();
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
