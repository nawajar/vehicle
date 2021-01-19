import { Component, OnInit } from '@angular/core';
import { OrderService } from '../Service/order.service';

@Component({
  selector: 'app-order-list',
  templateUrl: './order-list.component.html',
  styleUrls: ['./order-list.component.scss']
})
export class OrderListComponent implements OnInit {

  orders = 'OrderString';
  orderList: string[];


  constructor(
    private orderService: OrderService,
  ) { }

  ngOnInit(): void {
    this.orderList = this.getOrder();
    setTimeout(() => {
      this.orderList = ['e', 'f', 'g'];
    }, 5000);
  }

  getOrder(): Array<string> {
    return this.orderService.getOrder();
  }

}
