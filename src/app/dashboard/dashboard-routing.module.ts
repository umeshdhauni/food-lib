import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PanelComponent } from './panel/panel.component';
import { MainComponent } from './main/main.component';
import { ItemsComponent } from './items/items.component';
import { CartComponent } from './cart/cart.component';
import { BranchLocationComponent } from './branch-location/branch-location.component';
import { OrdersComponent } from './orders/orders.component';

const routes: Routes = [
  {
    path:'',
    component:PanelComponent,
    children:[
      {
        path:'',
        component:MainComponent
      },
      {
        path:'items',
        component:ItemsComponent
      },
      {
        path:'items/:category',
        component:ItemsComponent
      },
      {
        path:'cart',
        component:CartComponent
      },
      {
        path:'orders',
        component:OrdersComponent
      },
      {
        path:'branches',
        component:BranchLocationComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardRoutingModule { }
