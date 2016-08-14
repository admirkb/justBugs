import 'reflect-metadata';
import 'zone.js/dist/zone';

// Meteor
import { Meteor } from 'meteor/meteor';
import {ReactiveVar} from 'meteor/reactive-var';
import {Tracker} from 'meteor/tracker';
import {Mongo} from 'meteor/mongo';

// Angular
import {MeteorComponent} from 'angular2-meteor';
import {Component, EventEmitter, OnInit, Output, ViewChild, ViewChildren, ContentChildren, QueryList} from '@angular/core';
import {FormBuilder, ControlGroup, Validators, Control} from '@angular/common';

// Admir
// import {BugsForm} from '../bugs-form/bugs-form.ts';
// import {BugsItem} from '../bugs-item/bugs-item.ts';
import {Bugs} from '../../../imports/api/bugs';

import template from './bugs-list.html';

@Component({
  selector: 'bugs-list',
  template,
})
export class BugsList extends MeteorComponent implements OnInit {
  // @ViewChild(BugsItem) firstChild: BugsItem;
  //   @ViewChildren(BugsItem) bugsList: QueryList<BugsItem>;

  bugs: Mongo.Cursor<Object>;
  // helloEvent: EventEmitter = new EventEmitter();
  // public selfConnectionId: ReactiveVar<string> = new ReactiveVar<string>();
  @Output() helloEvent: EventEmitter<any> = new EventEmitter();


  constructor() {
    super();


    this.helloEvent.subscribe((args) => {
      var self = this;

      // this.setBugs();
      console.log("hello from helloEvent")
      // console.dir(args)

      // this.bugsList.last.setBug(args);


      // this.bugsList.toArray().forEach((list) => {
      //   this.setBug(list);
      // });
      //        var j = 5.1;
      // (function (j,self) {
      //     setTimeout(() => {
      //          self.setBugs();
      //     }, 1000 * j);
      // })(j,self);



    });

    // this.selfConnectionId.set("Test1 !!!")


    console.log("hello from bugs-list.ts")
  }

  ngOnInit() {



    console.log("I'm being called when component is initalized after constructor method from bugs-list.ts");


  }

  setBug(list) {
    console.log("in setBug()")
    list.setBug(list.bugModel);
  }


  setBugs() {

    //  let activeTabs = this.tabs.filter((tab)=>tab.active);
    // this.bugsList.first.setDiv();
    // this.bugsList.last.setDiv();

    // this.bugsList.toArray().forEach((list) => {
    //   this.setBug(list);
    // });


    var b = new Object();
    this.helloEvent.emit(b)

  }


}


