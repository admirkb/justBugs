import 'reflect-metadata';
import 'zone.js/dist/zone';
import { Observable } from 'rxjs/Observable';
import { Subject } from 'rxjs/Subject';
import { Subscription } from 'rxjs/Subscription';
import { MeteorObservable } from 'meteor-rxjs';
// Meteor
import { Meteor } from 'meteor/meteor';
import { ReactiveVar } from 'meteor/reactive-var';
import { Tracker } from 'meteor/tracker';
import { Mongo } from 'meteor/mongo';

// Angular
import { Component, EventEmitter, OnInit, Output, ViewChild, ViewChildren, ContentChildren, QueryList, OnDestroy, AfterViewInit, AfterViewChecked, AfterContentInit } from '@angular/core';

// Admir
// import {BugsForm} from '../bugs-form/bugs-form.ts';
// import {BugsItem} from '../bugs-item/bugs-item.ts';
import { Bugs } from '../../../imports/api/bugs';
import { BugsItemComponent } from '../../../imports/bugs/bugs-item/bugs-item';
import { BillingComponent } from '../../../imports/bugs/bugs-billingComponent/bugs-billingComponent';
import template from './bugs-list.html';

@Component({
  selector: 'bugs-list',
  template,
})
export class BugsListComponent implements OnInit, OnDestroy, AfterViewInit, AfterViewChecked, AfterContentInit {
  bugs: Observable<any[]>;
  bugsSub: Subscription;
  // @ViewChildren('input') bugsItemComponent: QueryList<BugsItemComponent>;
  @ViewChildren(BugsItemComponent) bugsItemComponent: QueryList<BugsItemComponent>;
  @ViewChild(BillingComponent) billingComponent: BillingComponent;

  private ngAfterViewCheckedDone: number = 0;
  // @ContentChildren(BugsItemComponent) bugsItemComponent2: QueryList<BugsItemComponent>;

  // @ViewChild(BugsItem) firstChild: BugsItem;
  // @ViewChildren(BugsItemComponent) bugsList: QueryList<BugsItemComponent>;

  // bugs: Mongo.Cursor<Object>;
  // helloEvent: EventEmitter = new EventEmitter();
  // public selfConnectionId: ReactiveVar<string> = new ReactiveVar<string>();
  @Output() helloEvent: EventEmitter<any> = new EventEmitter();

  ngAfterContentInit() {
    console.log('ngAfterContentInit')

  }
  ngAfterViewChecked() {


    // if (this.ngAfterViewCheckedDone !== 0) {
    //   return;
    // }
    // else {
    //   this.ngAfterViewCheckedDone++;
    // }

    console.log('ngAfterViewChecked')
    // this.bugsItemComponent.forEach((bug) => {
    //   console.dir(bug)

    //   // try {
    //   //   bug.dataReadyEvent.unsubscribe();
    //   // }
    //   // catch (err) {

    //   // }
    //   // finally {

    //   // }



    //   bug.dataReadyEvent.subscribe((args: any) => {
    //     console.dir(args)
    //   });

    // });


    // if (this.ngAfterViewCheckedDone) {
    //   return;
    // }

    // this.ngAfterViewCheckedDone = true;
    // var xxx = this.bugsItemComponent;
    // console.dir(xxx)
    // var yyy = this.bugsItemComponent2;

    // if (this.bugsItemComponent != null){return;}

    // this.bugsItemComponent.forEach((bug) => {
    //   // console.dir(bug)

    //   bug.dataReadyEvent.subscribe((args: any) => {
    //     console.dir(args)
    //   });

    // });


    // var yyy = this.billingComponent;

  }
  ngAfterViewInit() {
    console.log('ngAfterViewInit')

    //     setTimeout(() => {
    //       console.log('ngAfterViewInit setTimeout')

    //       this.bugsItemComponent.forEach((bug) => {
    //         // console.dir(bug)

    //         bug.dataReadyEvent.subscribe((args: any) => {
    //           console.dir(args.data)


    // alert(args.data._id)

    //           // this.bugs.forEach((bug) => {
    //           //   console.dir(bug)

    //           //   if (bug['_id'] === args.data._id) {
    //           //     alert("hey " + bug['_id'])

    //           //   }

    //           // });







    //         });

    //       });


    //     }, 1000 * 5);



    // var xxx = this.bugsItemComponent;
    // // var yyy = this.bugsItemComponent2;

    // var yyy = this.billingComponent;

    // this.bugsItemComponent[0].dataReadyEvent.subscribe((args: any) => {

    //   alert("hey")




    // });

  }

  constructor() {



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

  // ngOnInit() {



  //   console.log("I'm being called when component is initalized after constructor method from bugs-list.ts");


  // }



  ngOnInit() {
    console.log("I'm being called when component is initalized after constructor method from bugs-list.ts");
    if (this.bugsSub) {
      this.bugsSub.unsubscribe();
    }

    this.bugsSub = MeteorObservable.subscribe('bugs').subscribe(() => {
      this.bugs = Bugs.find({}, {
      }).zone();

      console.log("this.bugsSub");
      console.dir(this.bugs);
      // console.dir(this.bugsList)
    });

    setTimeout(() => {
      console.log('ngOnInit setTimeout')

      this.bugsItemComponent.forEach((bug) => {
        // console.dir(bug)

        bug.dataReadyEvent.subscribe((args: any) => {
          console.dir(args.data)


          alert(args.data._id)

          // this.bugs.forEach((bug) => {
          //   console.dir(bug)

          //   if (bug['_id'] === args.data._id) {
          //     alert("hey " + bug['_id'])

          //   }

          // });







        });

      });


    }, 1000 * 5);

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
  ngOnDestroy() {
    this.bugsSub.unsubscribe();


    this.bugsItemComponent.forEach((bug) => {


      bug.dataReadyEvent.unsubscribe();


    });

  }

}


