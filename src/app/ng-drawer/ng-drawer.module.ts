import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgDrawerComponent } from './ng-drawer/ng-drawer.component';



@NgModule({
  declarations: [NgDrawerComponent],
  imports: [
    CommonModule
  ],
  exports: [NgDrawerComponent]
})
export class NgDrawerModule { }
