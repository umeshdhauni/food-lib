import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit {
  sidebarOpen;
  constructor() { }

  ngOnInit() 
  {
  }

  sidePanel(){
    this.sidebarOpen = true;
  }

  closeSidebar(){
    this.sidebarOpen = false;
  }

}
