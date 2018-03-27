import { Component, OnInit } from '@angular/core';
import { DataService } from '../../services/dataService';
import { User } from '../models/user'

@Component({
  selector: 'home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit{
  userList: User[] = []
    constructor(private dataService: DataService){
  }

  ngOnInit(){
    let uri = "users";
    this.dataService.getUser(uri)
                           .subscribe(
                               users => {
                                 this.userList = users;
                                 console.log("userList ... ",this.userList)
                              }, 
                              err => {                                  
                                  console.log(err);
                              });
  }
}
