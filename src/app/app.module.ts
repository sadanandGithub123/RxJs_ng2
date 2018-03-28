import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common'
import { Routes, RouterModule } from '@angular/router';  
import { AppComponent } from './app.component';
import { DataService } from '../services/dataService'
import { HttpModule } from '@angular/http';
import {Http} from '@angular/http';

import { ObserverComponent } from './obserser/observer.component'
import { CbUserComponent } from "./Callback/cbUser.component";
import { PromiseComponent } from './promise/promise.component'
import { ObservableComponent} from './observables/Observable.component'
const routes: Routes = [  
  {  
    path: '',  
    component: ObservableComponent
  },
  {  
    path: 'createObservable',  
    redirectTo : ''
  },
  {
    path:'callbackUser',
    component : CbUserComponent
  },
  {
    path:'promiseUser',
    component : PromiseComponent
  },
  {
    path:'createObservable',
    component : ObservableComponent
  }
];

@NgModule({
  declarations: [
    AppComponent,
    ObserverComponent,
    CbUserComponent,
    PromiseComponent,
    ObservableComponent
  ],
  imports: [   
    BrowserModule,
    CommonModule,
    HttpModule,
    RouterModule.forRoot(routes)
  ],
  providers: [DataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
