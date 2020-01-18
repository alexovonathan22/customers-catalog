import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
 
import { DataService } from '../core/data.service';
import { ICustomer, IOrder, IOrderItem } from '../shared/interfaces';


@Component({
  selector: 'app-orders',
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.css']
})
export class OrdersComponent implements OnInit {

  orders: IOrder[] = [];
  _customer: ICustomer;

  constructor(private dataService: DataService, private route: ActivatedRoute) { }

  ngOnInit() {
    //this returns it as string, so convert using below or parseInt/Number() etc to make it a number
    let id = +this.route.snapshot.paramMap.get('id');

    this.dataService.getOrders(id).subscribe( ( orders: IOrder[] ) => {
      this.orders = orders;
    } );

    this.dataService.getCustomer(id)
        .subscribe(( customer: ICustomer ) => {
          this._customer = customer;
        });
  }

}
