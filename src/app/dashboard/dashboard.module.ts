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

@NgModule({
  declarations: [PanelComponent, MainComponent, ItemsComponent, CartComponent, OrdersComponent, BranchLocationComponent, ProfileComponent],
  imports: [
    CommonModule,
    DashboardRoutingModule
  ]
})
export class DashboardModule { }
