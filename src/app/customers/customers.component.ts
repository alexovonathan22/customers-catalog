import { Component, OnInit } from '@angular/core';
import { ICustomer } from '../shared/interfaces';
import { DataService } from '../core/data.service';

@Component({
  selector: 'app-customers',
  templateUrl: './customers.component.html',
  styleUrls: ['./customers.component.css']
})

export class CustomersComponent implements OnInit {
  title: string;
  people: ICustomer[];

//inject the service into the compnent ctor
  constructor(private dataService: DataService) { }

  ngOnInit() {
    this.title = 'Customers';
    this.dataService.getCustomers() //this line returns an observable
        .subscribe((customers: ICustomer[]) => this.people = customers);// we subscribe to the dataservice and 
        //in the  () we r assigning d data got to this.people.
        // this.people = [
        //     { id: 1, name: 'john Lucas', city: 'Phoenix', orderTotal: 9.99, customerSince: new Date(2014, 7, 10) },
        //     { id: 2, name: 'Jane Maher', city: 'Chandler', orderTotal: 19.99, customerSince: new Date(2017, 2, 22)},
        //     { id: 3, name: 'Michelle Thomas', city: 'Seattle', orderTotal: 99.99, customerSince: new Date(2002, 10, 31)},
        //     { id: 4, name: 'Jim Thomas', city: 'New York', orderTotal: 599.99, customerSince: new Date(2002, 10, 31)},
        //     { id: 5, name: 'Tom Eze', city: 'Kansas City', orderTotal: 200.99, customerSince: new Date(2002, 11, 3)},
        // ];
  }

}
