import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  MatInputModule,
  MatFormFieldModule,
  MatSidenavModule,
  MatListModule,
  MatDialogModule
} from '@angular/material';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    MatInputModule,
    MatFormFieldModule,
    MatSidenavModule,
    MatListModule,
    MatDialogModule
  ],
  exports: [
    MatInputModule,
    MatFormFieldModule,
    MatSidenavModule,
    MatListModule,
    MatDialogModule
  ]
})
export class SharedModule { }
