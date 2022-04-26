import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SimpleButtonComponent } from './simple-button/simple-button.component';
import { StrokedButtonComponent } from './stroked-button/stroked-button.component';

@NgModule({
  declarations: [
    SimpleButtonComponent,
    StrokedButtonComponent
  ],
  imports: [CommonModule],
})
export class ButtonModule { }
