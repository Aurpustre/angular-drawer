import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NgDrawerComponent } from './ng-drawer.component';

describe('NgDrawerComponent', () => {
  let component: NgDrawerComponent;
  let fixture: ComponentFixture<NgDrawerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NgDrawerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NgDrawerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
