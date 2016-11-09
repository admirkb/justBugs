import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent }  from './app.component';
import {BugsListComponent} from '../imports/bugs/bugs-list/bugs-list';
import {BugsItemComponent} from '../imports/bugs/bugs-item/bugs-item';
import { BillingComponent } from '../imports/bugs/bugs-billingComponent/bugs-billingComponent';
import { FormsModule } from '@angular/forms';


@NgModule({
  imports: [ BrowserModule , FormsModule],
  declarations: [ AppComponent, BugsListComponent,BugsItemComponent, BillingComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }