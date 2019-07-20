import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { NgDrawerModule } from './ng-drawer/ng-drawer.module';
import { TestContentComponent } from './test-content/test-content.component';

@NgModule({
  declarations: [
    AppComponent,
    TestContentComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgDrawerModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
