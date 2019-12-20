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

@NgModule({
  declarations: [PanelComponent, MainComponent, ItemsComponent, CartComponent, OrdersComponent, BranchLocationComponent, ProfileComponent, HeaderComponent],
  imports: [
    CommonModule,
    DashboardRoutingModule,
    SharedModule
  ]
})
export class DashboardModule { }
