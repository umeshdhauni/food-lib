import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material';
import { SearchComponent } from '../components/search/search.component';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

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

}
