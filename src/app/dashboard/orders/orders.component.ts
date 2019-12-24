import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material';
import { OrderDetailComponent } from '../components/order-detail/order-detail.component';

@Component({
  selector: 'app-orders',
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.scss']
})
export class OrdersComponent implements OnInit {
  colors=['#ea7b7b','#8ac78a','#95c0ec','#d799e6','#e699b5','#aec749']
  selectedDate= new Date();
  orders = [
    {
      no:'345',
      totalPrice:'34',
      quantity:'3',
      date:'April 24, 19',
      status:'progress',
      products:[
        {
          name: 'Egg Curry',
          image: 'best2.svg',
          price: '40',
        }, {
          name: 'Hungry Sandwich',
          image: 'best3.svg',
          price: '50',
        },
        {
          name: 'Strawberry Pancake',
          image: 'best1.svg',
          price: '20',
        }
      ]
    },
    {
      no:'346',
      totalPrice:'39',
      quantity:'2',
      date:'April 24, 19',
      status:'completed',
      products:[
        {
          name: 'Egg Curry',
          image: 'best2.svg',
          price: '40',
        }, {
          name: 'Hungry Sandwich',
          image: 'best3.svg',
          price: '50',
        }        
      ]
    },
    {
      no:'347',
      totalPrice:'14',
      quantity:'2',
      date:'April 24, 19',
      status:'completed',
      products:[
         {
          name: 'Hungry Sandwich',
          image: 'best3.svg',
          price: '50',
        },
        {
          name: 'Strawberry Pancake',
          image: 'best1.svg',
          price: '20',
        }
      ]
    },
    {
      no:'348',
      totalPrice:'10',
      quantity:'1',
      date:'April 25, 19',
      status:'completed',
      products:[
         {
          name: 'Hungry Sandwich',
          image: 'best3.svg',
          price: '50',
        },
        {
          name: 'Strawberry Pancake',
          image: 'best1.svg',
          price: '20',
        }
      ]
    }
  ]
  constructor(
    private dialog:MatDialog
  ) { }

  ngOnInit() {
  }

  orderDetail(order){
    let dialogRef = this.dialog.open(OrderDetailComponent, {
      height: '70%',
      width: '70%',   
      data:order   
    });
    dialogRef.afterClosed().subscribe(result => {
    });
  }


}
