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
  obs : Observable<any>;
  @ViewChild('button2') el:ElementRef;

  constructor() { }
  ngOnInit() {
    this.obs = Observable.fromEvent(this.el.nativeElement,'click');
    this.obs.subscribe(
      function (evt) { 
        console.log(evt.target.value)
      },
      function (err) { console.log('Error: %s', err); },
      function () { console.log('Completed'); });
  }

 
  
  clicked(randomNumber : number){
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

}
