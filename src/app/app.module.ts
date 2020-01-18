import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { CustomersModule } from './customers/customers.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { SharedModule } from './shared/shared.module';
import { CoreModule } from './core/core.module';
//adding routing to my app
import { AppRoutingModule } from './app-routing.module';
import { OrdersModule } from './orders/orders.module';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
  ],
  imports: [
    BrowserModule,
    CustomersModule,
    OrdersModule,
    CoreModule,
    SharedModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
