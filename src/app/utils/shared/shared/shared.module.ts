import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  MatInputModule,
  MatFormFieldModule,
  MatSidenavModule,
  MatListModule,
  MatDialogModule,
  MatMenuModule,
  MatSelectModule,
  MatDatepickerModule,
  MatGridListModule,
  MatSliderModule
} from '@angular/material';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    MatInputModule,
    MatFormFieldModule,
    MatSidenavModule,
    MatListModule,
    MatDialogModule,
    MatMenuModule,
    FormsModule,
    ReactiveFormsModule,
    MatSelectModule,
    MatDatepickerModule,
    MatGridListModule,
    MatSliderModule,
  ],
  exports: [
    MatInputModule,
    MatFormFieldModule,
    MatSidenavModule,
    MatListModule,
    MatDialogModule,
    MatMenuModule,
    FormsModule,
    ReactiveFormsModule,
    MatSelectModule,
    MatDatepickerModule,
    MatGridListModule,
    MatSliderModule
  ]
})
export class SharedModule { }
