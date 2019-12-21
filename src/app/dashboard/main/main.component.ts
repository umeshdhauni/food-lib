import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {
  allCategories=[{
    name:'Pizza',
    image:'pizza-slice.svg'
  },
  {
    name:'Chinese',
    image:'noodles.svg'
  },
  {
    name:'Drinks',
    image:'beer.svg'
  },
  {
    name:'Burger',
    image:'burgerim.svg'
  },
  {
    name:'Dessert',
    image:'cupcake.svg'
  },
  {
    name:'Japanese',
    image:'sushi.svg'
  },
  {
    name:'Barbecue',
    image:'skewer.svg'
  }
];
allDishes=[{
  name:'Egg Curry',
  image:'best2.svg',
  price:'40',
  tag:'Egg Special',
  rating:5
},{
  name:'Hungry Sandwich',
  image:'best3.svg',
  price:'50',
  tag:'Fast Food',
  rating:3.7
},
{
  name:'Strawberry Pancake',
  image:'best1.svg',
  price:'20',
  tag:'Desserts',
  rating:4
},]
  constructor() { }

  ngOnInit() {
  }

}
