import { Component, OnInit } from '@angular/core';
import { DataService } from '../../services/dataService';
import { User } from '../models/user'

@Component({
  selector: 'cbUser',
  templateUrl: './cbUser.component.html',
  styleUrls: ['./cbUser.component.css'],
})
export class CbUserComponent implements OnInit{
  userList: User[] = []
    constructor(private dataService: DataService){
  }

  ngOnInit(){
    let uri = "users";
    this.getUsers(uri);   
  }
  getUsers(uri:String){
    let that = this;
    this.dataService.getUsers_cb(uri,function(err,res){
      if(err) console.log(err);
      console.log("res... ",res)
      that.userList = res;
    })
    
}
}
