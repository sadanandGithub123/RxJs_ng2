import { Component, OnInit } from '@angular/core';
import {Observable} from 'rxjs/Observable';
import { interval } from 'rxjs/observable/interval';


@Component({
  selector: 'operators',
  templateUrl: './operators.component.html',
  styleUrls: ['./operators.component.css'],
})
export class OperatorsComponent implements OnInit{
  
  subscription : any;
  filtervalue : string ;
  ngOnInit(){
  }

 

  clickFilter(){
  let that = this;
  var observable = Observable.interval(1000);
  var observer = {
    next : function(value){
      that.filtervalue = value;
      console.log(value);
    },
    error : function(value){
      console.log(value);
    }
  }
  this.subscription = observable.
   filter(function( value ){
     console.log("Value ... ",value)
     return value % 2 == 0
   })
   .subscribe(observer);
   
  }

  unsubscribe(){
    this.subscription.unsubscribe();
  }
}
