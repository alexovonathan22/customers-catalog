import { Component, OnInit, Input } from "@angular/core";
import { ICustomer } from "src/app/shared/interfaces";

@Component({
  selector: "app-customers-list",
  templateUrl: "./customers-list.component.html",
  styleUrls: ["./customers-list.component.css"]
})
export class CustomersListComponent implements OnInit {
  
  private _customers: ICustomer[] = [];
  //attach a decorator to any of the get or set mtd
  @Input() get customers(): ICustomer[] {
    return this._customers;
  }
  
  set customers(value: ICustomer[]) {
    if(value){
      this.filteredCustomers = this._customers = value;
      this.calculateOrders();
    }
  }

  filteredCustomers: ICustomer[] = [];
  customersOrderTotal: number;
  currencyCode: string = "USD";

  constructor() {}

  ngOnInit() {
    
  }

  calculateOrders() {
    this.customersOrderTotal = 0;
    this.filteredCustomers.forEach((cust: ICustomer) => {
      this.customersOrderTotal += cust.orderTotal;
    });
  }

  sort(prop: string){
    //to be handled by a service
  }
}
