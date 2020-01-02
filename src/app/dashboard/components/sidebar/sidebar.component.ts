import { Component, OnInit, Inject, Input, Output, EventEmitter } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {
  @Input() active;
  @Output() closeSidebar = new EventEmitter();
  constructor(
    private router:Router
  ) { 
    
  }

  ngOnInit() {
  }

  close(){
    this.closeSidebar.emit();
  }

  navigate(val){
    this.router.navigate([`/${val}`]);
  }

}
