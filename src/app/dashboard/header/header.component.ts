import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material';
import { SearchComponent } from '../components/search/search.component';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  sidebarOpen;
  allNotifications=[{
    title:'Lorem ipsum, or lipsum as it is sometimes known, is dummy text used in laying',
    time:'1'
  },
  {
    title:'Sameer is assigned to your order #ODR20',
    time:'2'
  },
  {
    title:'Lorem ipsum, or lipsum as it is sometimes known, is dummy text used in laying',
    time:'5'
  }];
  constructor(
    private dialog:MatDialog
  ) { }

  ngOnInit() {
  }

  openSearchDialog(){
    let dialogRef = this.dialog.open(SearchComponent, {
      height: '80%',
      width: '80%',      
    });
    dialogRef.afterClosed().subscribe(result => {
    });
  }

  sidePanel(){
    this.sidebarOpen = true;
  }

  closeSidebar(){
    this.sidebarOpen = false;
  }

}
