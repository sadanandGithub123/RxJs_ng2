import { Injectable } from '@angular/core';
import {Observable} from 'rxjs/Rx';
import { Http,Headers,RequestOptions,Response} from '@angular/http';

import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

const BASE_URL:String = "http://localhost:3000/api";

@Injectable()
export class DataService {
    constructor (private http: Http) {}
    
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