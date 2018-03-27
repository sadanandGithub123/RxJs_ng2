import { Component, OnInit } from '@angular/core';
import { DataService } from '../../services/dataService';
import { User } from '../models/user'

@Component({
  selector: 'observer',
  templateUrl: './observer.component.html',
  styleUrls: ['./observer.component.css'],
})
export class ObserverComponent implements OnInit{
  userList: User[] = []
    constructor(private dataService: DataService){
  }

  ngOnInit(){
    let uri = "users";
    this.getUsers(uri);   
  }
  getUsers(uri:String){
    this.dataService.getUser(uri)
    .subscribe(
        users => {
          this.userList = users;
       }, 
       err => {                                  
           console.log(err);
       });
  }
}
