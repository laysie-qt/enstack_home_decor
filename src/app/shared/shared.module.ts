import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';



@NgModule({
  declarations: [],
  imports: [
    CommonModule, 
    ReactiveFormsModule, 
    MatInputModule,
    MatIconModule, 
    MatFormFieldModule,
    FormsModule
  ],
  exports: [
    CommonModule, 
    ReactiveFormsModule, 
    MatInputModule,
    MatIconModule, 
    MatFormFieldModule,
    FormsModule
  ]
})
export class SharedModule { }
