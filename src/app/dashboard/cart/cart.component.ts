import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit {
  form;
  allCartItems=[
    {
      name:'Egg Curry',
      image:'best2.svg',
      price:'40',
      count:2
    },{
      name:'Hungry Sandwich',
      image:'best3.svg',
      price:'50',
      count:1
    },
    {
      name:'Strawberry Pancake',
      image:'best1.svg',
      price:'20',
      count:4
    },
  ]
  constructor(
    private fb:FormBuilder
  ) { }

  ngOnInit() {
    this.createForm();
  }

  createForm(){
    this.form = this.fb.group({
      bank:[''],
      cardName:[''],
      cardNumber:[''],
      expMonth:[''],
      expYear:[''],
      cvv:[''],
    })
  }

}
