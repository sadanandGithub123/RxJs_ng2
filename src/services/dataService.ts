import { Injectable } from '@angular/core';
import {Observable} from 'rxjs/Rx';
import { Http,Headers,RequestOptions,Response} from '@angular/http';

import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

const BASE_URL:String = "http://localhost:3000/api";
const StubUser = [
    {
        "id": 1,
        "first_name": "Eve",
        "last_name": "Holt",
        "avatar": "images/001.jpg"
    },
    {
        "id": 2,
        "first_name": "Charles",
        "last_name": "Morris",
        "avatar": "images/002.jpg"
    },
    {
        "id": 3,
        "first_name": "Tracey",
        "last_name": "Ramos",
        "avatar": "images/003.jpg"
    },
    {
        "id": 4,
        "first_name": "John",
        "last_name": "Doe",
        "avatar": "images/004.jpg"
    }
];
@Injectable()
export class DataService {
    constructor (private http: Http) {}

    getUsers_cb(uri : String,cb) : void {       
        setTimeout(function() {
           cb(null,StubUser);
          }, 1000);
    }

    getUsers_promise(uri : String) : Promise<any[]>{
        return new Promise(function(resolve, reject) {
            setTimeout(function() {
                resolve(StubUser)
               }, 1000);
          });
    }

    getUser(uri : String) : Observable<any[]> {
        let url = BASE_URL + "/" + uri ;
        let headers      = new Headers({ 
            'Access-Control-Allow-Origin': '*',
            'Access-Control-Allow-Methods': 'GET, POST, OPTIONS, PUT, PATCH, DELETE',
            'Access-Control-Allow-Headers': 'X-Requested-With,content-type',
            'Access-Control-Allow-Credentials': true ,
            'Content-Type': 'application/json' 
        }); // ... Set content type to JSON
        let options       = new RequestOptions({ headers: headers }); // Create a request option

        return this.http.get(url,options)                      
                        .map((res:Response) => res.json())                        
                        .catch((error:any) => Observable.throw(error.json().error || 'Server error'));

    }

}