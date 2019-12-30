import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardRoutingModule } from './dashboard-routing.module';
import { PanelComponent } from './panel/panel.component';
import { MainComponent } from './main/main.component';
import { ItemsComponent } from './items/items.component';
import { CartComponent } from './cart/cart.component';
import { OrdersComponent } from './orders/orders.component';
import { BranchLocationComponent } from './branch-location/branch-location.component';
import { ProfileComponent } from './profile/profile.component';
import { SharedModule } from '../utils/shared/shared/shared.module';
import { HeaderComponent } from './header/header.component';
import { ItemComponent } from './components/item/item.component';
import { SearchComponent } from './components/search/search.component';
import { OrderDetailComponent } from './components/order-detail/order-detail.component';

@NgModule({
  declarations: [PanelComponent, MainComponent, ItemsComponent, CartComponent, OrdersComponent, BranchLocationComponent, ProfileComponent, HeaderComponent, ItemComponent, SearchComponent, OrderDetailComponent],
  imports: [
    CommonModule,
    DashboardRoutingModule,
    SharedModule
  ],
  entryComponents:[
    SearchComponent,
    OrderDetailComponent,
  ]
})
export class DashboardModule { }
