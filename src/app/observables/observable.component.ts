import { Component, OnInit } from '@angular/core';
import { DataService } from '../../services/dataService';
import { User } from '../models/user'
import {Observable} from 'rxjs/Observable';
import {ElementRef} from '@angular/core';
import {ViewChild} from '@angular/core';



@Component({
  selector: 'observable',
  templateUrl: './observable.component.html',
  styleUrls: ['./observable.component.css'],
})
export class ObservableComponent implements OnInit {
  clickedValue_Of : string;
  value_fromEvt : string;
  value_create: string;

  obs : Observable<any>;
  @ViewChild('button2') el:ElementRef;

  constructor() { }
  ngOnInit() {
    var that = this;
    this.obs = Observable.fromEvent(this.el.nativeElement,'click');
    this.obs.subscribe(
      function (evt) { 
        console.log(evt.target.value)
        that.value_fromEvt = evt.target.value;


      },
      function (err) { console.log('Error: %s', err); },
      function () { console.log('Completed'); });
  }

 
  
  clicked1(){
    var that = this;
    let random =Math.random();
    var observable = Observable.of(random);
   // observable.map( value => { console.log(value); return 78})
   observable.subscribe(
      function (x) { 
        that.clickedValue_Of = x.toString();
        console.log('Next: %s', x); 
      },
      function (err) { console.log('Error: %s', err); },
      function () { console.log('Completed'); });
  }

  clicked3(){    
    var observer = {
      next : function(value){
        console.log(value)
      },
      error : function(value){
        console.log(value)
      },
      complete : function(){
        console.log("completed")
      }
    }
    Observable.of(function(obs){
      obs.next("A Value");
    }).subscribe(observer);
  }
}
