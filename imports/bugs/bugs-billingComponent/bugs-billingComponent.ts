// import {AlphaCore} from '../../../alphaCore/alphaCore.component';
import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import template from './bugs-billing.component.html';

@Component({
    selector: 'billing',
    template,
})
export class BillingComponent implements OnInit {
private counter: number =  100;

    constructor() {


        console.log("BillingComponent contructor...");


    }

    ngOnInit() {



    }

}