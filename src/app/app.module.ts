import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';  
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component'
import { DataService } from '../services/dataService'
import { HttpModule } from '@angular/http';
import {Http} from '@angular/http';


const routes: Routes = [  
  {  
    path: '',  
    component: AppComponent
  },
  {  
    path: 'home',  
    component: HomeComponent
  }

];

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent
  ],
  imports: [   
    BrowserModule,
    HttpModule,
    RouterModule.forRoot(routes)
  ],
  providers: [DataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
