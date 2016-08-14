import 'reflect-metadata';
import 'zone.js/dist/zone';

// Meteor
import { Meteor } from 'meteor/meteor';
import {Mongo} from 'meteor/mongo';

// Angular
import {Component, EventEmitter, OnInit, provide} from '@angular/core';
import { bootstrap } from '@angular/platform-browser-dynamic';
import { APP_BASE_HREF } from '@angular/common';
import { provideRouter, RouterConfig, ROUTER_DIRECTIVES, Router } from '@angular/router';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';


// import {googleMaps} from 'google-maps';

// Admir
import {Bugs} from '../imports/api/bugs';
// import {BugsList} from '../imports/bugs/bugs-list/bugs-list';



import template from './app.component.html';

// export const routes: RouterConfig = [
//   { path: '', component: BugsList },
//   { path: 'bugs', component: BugsList }

// ];

// export const APP_ROUTER_PROVIDERS = [
//   provideRouter(routes)
// ];

//  template: '<button>Click Here</button>',
@Component({
  selector: 'app',
  template,
})
export class AppComponent implements OnInit {
  constructor() {




  }

  ngOnInit() {

    console.log("I'm being called when component is initalized after constructor method in BasicAngular2 in app.ts");
  }

}

