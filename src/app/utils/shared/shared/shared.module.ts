import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  MatInputModule,
  MatFormFieldModule,
  MatSidenavModule,
  MatListModule,
  MatDialogModule,
  MatMenuModule
} from '@angular/material';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    MatInputModule,
    MatFormFieldModule,
    MatSidenavModule,
    MatListModule,
    MatDialogModule,
    MatMenuModule
  ],
  exports: [
    MatInputModule,
    MatFormFieldModule,
    MatSidenavModule,
    MatListModule,
    MatDialogModule,
    MatMenuModule
  ]
})
export class SharedModule { }
