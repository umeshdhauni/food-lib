import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {
  allCategories=['dsaf','sdaf','dasf','afs','dsaf','sdaf','dasf','afs']
  constructor() { }

  ngOnInit() {
  }

}
