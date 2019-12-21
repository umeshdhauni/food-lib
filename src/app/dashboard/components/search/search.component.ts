import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {
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
  constructor(
    private dialogRef:MatDialogRef<SearchComponent>
  ) { }

  ngOnInit() {
  }

  close(){
    this.dialogRef.close();
  }

}
