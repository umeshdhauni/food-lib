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
allDishes=['','','','']
  constructor() { }

  ngOnInit() {
  }

}
