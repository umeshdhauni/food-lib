import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-items',
  templateUrl: './items.component.html',
  styleUrls: ['./items.component.scss']
})
export class ItemsComponent implements OnInit {
  category;

  allDishes = [{
    name: 'Egg Curry',
    image: 'best2.svg',
    price: '40',
    rating: 5
  }, {
    name: 'Hungry Sandwich',
    image: 'best3.svg',
    price: '50',
    rating: 3.7
  },
  {
    name: 'Strawberry Pancake',
    image: 'best1.svg',
    price: '20',
    rating: 4
  },
  {
    name: 'Egg Curry',
    image: 'best2.svg',
    price: '40',
    rating: 5
  },
  {
    name: 'Hungry Sandwich',
    image: 'best3.svg',
    price: '50',
    rating: 3.7
  },
  {
    name: 'Strawberry Pancake',
    image: 'best1.svg',
    price: '20',
    rating: 4
  },
  ];

  allCategories = [
    {
      name: 'Pizza',
      count: '3',
      image: 'pizza-slice.svg'
    },
    {
      name: 'Chinese',
      count: '2',
      image: 'noodles.svg'
    },
    {
      name: 'Beverages',
      count: '5',
      image: 'beer.svg'
    },
    {
      name: 'Burger',
      count: '6',
      image: 'burgerim.svg'
    },
    {
      name: 'Dessert',
      count: '3',
      image: 'cupcake.svg'
    },
    {
      name: 'Japanese',
      count: '1',
      image: 'sushi.svg'
    },
    {
      name: 'Barbecue',
      count: '4',
      image: 'skewer.svg'
    }
  ]
  constructor(
    private route: ActivatedRoute,
    private router: Router
  ) {
    this.route.params.subscribe(res => {
      if (res['category']) {
        let name = res['category'].toUpperCase()[0] + res['category'].slice(1);
        let index = this.allCategories.findIndex(element =>{
          return element.name == name;
        });
        if(index >= 0){
        this.category = this.allCategories[index];
        }
      }
    })
  }

  ngOnInit() {
  }

  categoryItem(category) {
    this.router.navigate(['/dashboard/items', category.name.toLowerCase()])
  }

}
