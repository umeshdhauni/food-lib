import { Component, OnInit, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material';

@Component({
  selector: 'app-order-detail',
  templateUrl: './order-detail.component.html',
  styleUrls: ['./order-detail.component.scss']
})
export class OrderDetailComponent implements OnInit {
  order;
  constructor(
    @Inject(MAT_DIALOG_DATA) public data,
    private dialogRef: MatDialogRef<OrderDetailComponent>,
  ) { 
    this.order = this.data
  }

  ngOnInit() {
  }

  close(){
    this.dialogRef.close()
  }

}
