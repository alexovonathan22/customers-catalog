import { Component, OnInit, Input } from "@angular/core";
import { ICustomer } from "src/app/shared/interfaces";
import { SorterService } from 'src/app/core/sorter.service';

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

  constructor(private sorterService: SorterService) {}

  ngOnInit() {
    
  }

  calculateOrders() {
    this.customersOrderTotal = 0;
    this.filteredCustomers.forEach((cust: ICustomer) => {
      this.customersOrderTotal += cust.orderTotal;
    });
  }


  filter(data: string) {
    if (data) {
        this.filteredCustomers = this.customers.filter((cust: ICustomer) => {
            return cust.name.toLowerCase().indexOf(data.toLowerCase()) > -1 ||
                   cust.city.toLowerCase().indexOf(data.toLowerCase()) > -1 ||
                   cust.orderTotal.toString().indexOf(data) > -1;
        });
      } else {
        this.filteredCustomers = this.customers;
      }
    this.calculateOrders();
}

  sort(prop: string){

    //to be handled by a service
    this.sorterService.sort(this.filteredCustomers, prop);
  }
}