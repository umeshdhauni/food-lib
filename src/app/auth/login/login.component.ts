import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  sidebarOpen;
  constructor() { }

  ngOnInit() {
  }

  sidePanel(){
    this.sidebarOpen = true;
  }

  closeSidebar(){
    this.sidebarOpen = false;
  }

}
