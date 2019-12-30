import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {
  active;
  constructor(
    private dialogRef:MatDialogRef<SidebarComponent>,
    @Inject(MAT_DIALOG_DATA) public data,
    private router:Router
  ) { 
    this.active = this.data;
  }

  ngOnInit() {
  }

  close(){
    this.dialogRef.close();
  }

  navigate(val){
    this.router.navigate([`/${val}`]);
    this.dialogRef.close();
  }

}
