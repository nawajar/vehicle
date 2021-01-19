import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Orders } from '../Models/orders.model';
import { OrderService } from '../Service/order.service';

@Component({
  selector: 'app-order-list',
  templateUrl: './order-list.component.html',
  styleUrls: ['./order-list.component.scss']
})
export class OrderListComponent implements OnInit {

  orders = 'OrderString';
  orderList: Orders[];

  form: FormGroup;
  summaryTable: number;

  constructor(
    private orderService: OrderService,
    private fb: FormBuilder,
  ) {
    this.form = this.fb.group({
      firstName: this.fb.control('', Validators.required),
      lastName: ['', Validators.required],
    });
  }

  ngOnInit(): void {
    this.getOrder();
  }

  getOrder(): void {
    this.orderService.getOrder().subscribe((res: Orders[]) => {
      this.orderList = res;
      this.calculateSummary(res);
    });
  }

  calculateSummary(res: Orders[]): void {
    let a = 0;
    res.forEach((e) => {
      a += e.amount;
    });
    this.summaryTable = a;
  }

  submitForm(): void {
    console.log(this.form.getRawValue());
  }

  selectRow(i: any): void {
    console.log(i);
    this.orderList[i].amount = 999;
  }

}
