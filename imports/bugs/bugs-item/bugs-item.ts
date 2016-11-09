import 'reflect-metadata';

import { Meteor } from 'meteor/meteor';

// Angular

import { NgZone, Component, EventEmitter, OnInit, Input, ElementRef, ViewChild, OnDestroy, AfterViewInit, Output } from '@angular/core';
import { MeteorComponent } from 'angular2-meteor';
import { Observable, Subject, Subscription } from 'rxjs/Rx';
import { ReactiveVar } from 'meteor/reactive-var'
// Admir
// import {BugsForm} from '../../../imports/bugs/bugs-form/bugs-form';

import template from './bugs-item.html';

interface myObject {
  theTime: string;
}

@Component({
  selector: 'bugs-item',
  template,
  // properties: ['problem']
})
export class BugsItemComponent implements OnInit, OnDestroy {
  //  @ViewChild(BugsForm) staffsForm: BugsForm;
  @Input() bugModel;
  @Input() theIndex;
  private _element: any;

  private _zone: NgZone;
  private _clientActivated;

  x3: Subject<myObject> = new Subject<myObject>();
  x3Subscription: Subscription;

  x4: Subject<myObject> = new Subject<myObject>();
  x4Subscription: Subscription;

  @Output() dataReadyEvent: EventEmitter<any> = new EventEmitter();

  getStyle() {
    if (this._clientActivated) {
      return "yellow";
    } else {
      return "green";
    }
  }

  constructor(elementRef: ElementRef, private zone: NgZone) {

    this._zone = zone;
    this._element = elementRef.nativeElement;



    // this._zone.run(() => { alert('Hey') });
    this.setIsClientActivated(false);

    // this._zone.run(() => { this.setIsClientActivated(false); });

    // this.x3 = Observable.create(() => {
    //   return () => console.log('disposed')
    // });
    // this.x3['theCount'] = 0;
    // this.x3Subscription = this.x3.subscribe(

    //   (x) => console.log('on?: %s', x),
    //   (e) => console.log('onError: %s', e),
    //   () => console.log('onCompleted'));

    // var xTimer = Observable.timer(
    //   0, /* 0 seconds delay */
    //   1000 /* 1 second */).timestamp();



    // xTimer.subscribe(
    //   x => {
    //     this.x3['theTime'] = new Date(x.timestamp);
    //     this.x3['theCount']++;
    //     this.x3Subscription['next(this.x3)']

    //   }
    // );



    // this.x4 = Observable.create((xxx: any) => {
    //   return () => console.log('disposed')
    // });

    // this.x4Subscription = this.x4.subscribe(

    //   x => {
    //     this.x4['theCount'] = new Date(x.timestamp);
    //     this.x4Subscription['next(this.x4)']

    //   },
    //   (e) => console.log('onError: %s', e),
    //   () => console.log('onCompleted'));


  }

  ngAfterViewInit() {



    // console.log(this._element.outerHTML)
    // console.log("ngAfterViewInit from bugs-item.ts");

    // var cells = this._element.getElementsByTagName("td");

    // for (var i = 0; i < cells.length; i++) {
    //   cells[i].style.backgroundColor = "blue";

    //   var inputs = cells[i].getElementsByTagName("input");
    //   for (var j = 0; j < inputs.length; j++) {
    //     if (inputs[j] != null) {
    //       inputs[j].disabled = true;
    //     }
    //   }

    //   var buttons = cells[i].getElementsByTagName("button");
    //   for (var j = 0; j < buttons.length; j++) {
    //     buttons[j].disabled = false;
    //     buttons[j].style.backgroundColor = "yellow";

    //     // buttons[j].innerHTML = "WhatApp"
    //   }


    // }



  }
  ngOnInit() {

    // console.log(this._element.outerHTML)
    // console.log("I'm being called when component is initalized after constructor method from bugs-item.ts");


  }

  public setBug(bug) {
    // bug.editColor = "purple"
    bug.editColor = "blue";
    // console.log("In setBug")
    console.dir(bug)
    this._element.style.background = "orange";

    console.dir(this._element)

    // this.bugModel.problem = bug.problem;
    // alert(this.bugModel.problem + " / " + bug.problem)

    // this.myThis.bugModel.editColor =    bug.editColor  ;
    // this.bugModel.editColor = bug.editColor;
  }

  /* */

  cancelBug(bug) {

    bug.isEditable = false;
    bug.problem = bug.origProblem;
    bug.response = bug.origResponse;

    var self = this;
    Meteor.call('bugs.update', { _id: bug._id }, { $set: { isDisabled: false, isEditable: bug.isEditable, editColor: "transparent" } }, function (error, result) {
      // console.log("here" + bug.selfConnectionId)
      // bug.isDisabled = false;
      // bug.editColor = "transparent";

      // var cells = self._element.getElementsByTagName("td");
      // for (var i = 0; i < cells.length; i++) {
      //   cells[i].style.backgroundColor = "black";


      //   var inputs = cells[i].getElementsByTagName("input");
      //   for (var j = 0; j < inputs.length; j++) {
      //     if (inputs[j] != null) {
      //       inputs[j].disabled = false;
      //     }
      //   }

      //   var buttons = cells[i].getElementsByTagName("button");
      //   for (var j = 0; j < buttons.length; j++) {
      //     buttons[j].disabled = false;
      //   }
      //   console.dir(inputs)
      //   // console.dir(cells[i].children)
      // }


      console.log("bugs.update editBug callback")
    });

  }

  updateBug(bug) {
    console.dir(bug)

    Meteor.call('bugs.update', { _id: bug._id }, { $set: { isDisabled: false, isEditable: false, problem: bug.problem, response: bug.response, dateResolved: new Date(), editColor: "transparent" } }, function (error, result) {
      // console.log("here")
      // console.dir(error)
      // console.dir(result)

      console.log("bugs.update updateBug callback")
    });

  }

  deleteBug(bug) {

    Meteor.call('bugs.remove', { _id: bug._id });
  }

  setIsClientActivated(b: boolean) {

    this._clientActivated = b;
  }
  editBug(bug) {


    bug.isEditable = true;
    bug.origProblem = bug.problem;
    bug.origResponse = bug.response;
    this._zone.run(() => { this.setIsClientActivated(true); });

    // bug.isDisabled = false;
    // bug.editColor = "yellow";

    var self = this;

    self['bug'] = bug;



    setTimeout(() => {


      this.x3['theCount'] = 1000;
      Meteor.call('bugs.update', { _id: bug._id }, { $set: { isDisabled: false, isEditable: bug.isEditable, editColor: "red" } }, function (error, result) {


    var b = new Object();
    b['date'] = new Date();
    b['data'] = self['bug'];
    self.dataReadyEvent.emit(b)

        // self._zone.run(() => { alert('Hey') });
        //  self._zone.run(() => { alert(result) });


        // setTimeout(() => {

        //   self._zone.run(() => {
        //     // self.x3['theCount'] = 9999;
        //     self.setIsClientActivated(true);

        //     var xxx = self._clientActivated;
        //     var cells = self._element.getElementsByTagName("td");

        //     for (var i = 0; i < cells.length; i++) {
        //       cells[i].style.backgroundColor = "khaki";

        //       var inputs = cells[i].getElementsByTagName("input");
        //       for (var j = 0; j < inputs.length; j++) {
        //         if (inputs[j] != null) {
        //           inputs[j].disabled = true;
        //         }
        //       }

        //       var buttons = cells[i].getElementsByTagName("button");
        //       for (var j = 0; j < buttons.length; j++) {
        //         buttons[j].disabled = true;
        //         buttons[j].style.backgroundColor = "brown";

        //         // buttons[j].innerHTML = "WhatApp"
        //       }

        //       console.dir(buttons)


        //     }

        //     console.log("bugs.update editBug callback")

        //   });
        // }, 1000 * 5);










        // self._zone.run(() => { alert('Hey') });

        // setTimeout(() => {

        //   self._zone.run(() => { self.setIsClientActivated(true); });
        //   self._zone.run(() => { alert('Hey') });
        //   console.log("bugs.update editBug callback - setTimeout")

        //   // self.zone.run(() => function () {
        //   //   this.setIsClientActivated(true);
        //   //   console.log("bugs.update editBug callback - setTimeout")
        //   // });


        // }, 1000 * 5);

        return;
        // console.log("here" + bug.selfConnectionId)
        // bug.isDisabled = false;
        // bug.editColor = "transparent";

        // this.ngZone.run(() => function () { };

        self['bug'].isDisabled = false;
        self['bug'].editColor = "green";

        console.log("result")
        console.dir(result)

        result[0].editColor = "white";


        setTimeout(() => {

          result[0].editColor = "white";

          // self._zone.run(() => function () { });

          self._zone.run(() => {

            console.log("In zone")
            console.dir(result[0])

            result[0].editColor = "white";


            // var cells = self._element.getElementsByTagName("td");
            // for (var i = 0; i < cells.length; i++) {
            //   cells[i].style.backgroundColor = "black";


            //   var inputs = cells[i].getElementsByTagName("input");
            //   for (var j = 0; j < inputs.length; j++) {
            //     if (inputs[j] != null) {
            //       inputs[j].disabled = true;
            //     }
            //   }

            //   var buttons = cells[i].getElementsByTagName("button");
            //   for (var j = 0; j < buttons.length; j++) {
            //     buttons[j].disabled = false;
            //     buttons[j].style.backgroundColor = "yellow";

            //     buttons[j].innerHTML = "WhatApp"
            //   }
            //   console.dir(buttons)

            //   //  buttons.innerHTML = "WhatApp"
            //   // console.dir(cells[i].children)
            // }

          });


          // bug.isDisabled = false;
          // bug.editColor = "yellow";

        }, 1000 * 5);


        console.log("bugs.update editBug callback")
      });


    }, 1000 * 5);



    return;



  }

  doModal(ev) {

    console.dir(ev);


  }

  ngOnDestroy() {

  }

}
