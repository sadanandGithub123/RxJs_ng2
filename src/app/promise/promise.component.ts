import { Component, OnInit } from '@angular/core';
import { DataService } from '../../services/dataService';
import { User } from '../models/user'

@Component({
  selector: 'promise',
  templateUrl: './promise.component.html',
  styleUrls: ['./promise.component.css'],
})
export class PromiseComponent implements OnInit{
  userList: User[] = []
    constructor(private dataService: DataService){
  }

  ngOnInit(){
    let uri = "users";
    this.getUsers(uri);   
  }
  getUsers(uri:String){
    this.dataService.getUsers_promise(uri).then(users => {
      this.userList = users
    }, err => {
      console.log("ERROR -- err");
    });
  }
}
