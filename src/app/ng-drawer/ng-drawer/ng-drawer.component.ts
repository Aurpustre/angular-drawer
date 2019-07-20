import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ng-drawer',
  templateUrl: './ng-drawer.component.html',
  styleUrls: ['./ng-drawer.component.scss']
})
export class NgDrawerComponent implements OnInit {

  isOpen = false;
  ndwidth = '360px';

  _ndwidth = '0';

  constructor() { }

  ngOnInit() {
  }

  openDrawer(){
    this.isOpen = true;
    this._ndwidth = this.ndwidth
  }
  closeDrawer(){
    this.isOpen = false;
    this._ndwidth = '0';
  }

}
