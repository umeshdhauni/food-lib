import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

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
    name:'Beverages',
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
  rating:5
},{
  name:'Hungry Sandwich',
  image:'best3.svg',
  price:'50',
  rating:3.7
},
{
  name:'Strawberry Pancake',
  image:'best1.svg',
  price:'20',
  rating:4
},]

  constructor(
    private router:Router
  ) { }

  ngOnInit() {
  }

  categoryItem(category){
    this.router.navigate(['/dashboard/items',category.name.toLowerCase()])
  }

}
