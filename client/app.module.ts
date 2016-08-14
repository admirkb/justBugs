import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent }  from './app.component';
import {BugsList} from '../imports/bugs/bugs-list/bugs-list';

@NgModule({
  imports: [ BrowserModule ],
  declarations: [ AppComponent, BugsList ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }