import {Injectable } from '@angular/core';
import {Http, Response} from '@angular/http';
import 'rxjs/add/operator/map';
import {Observable} from 'rxjs/Observable'; 

@Injectable()

export class ProductService {

    private _url: string = "json/products.json"
    constructor(private _http:Http){}
    
   getDetails() { 
    return this._http.get(this._url)
        .map((response:Response) => response.json()); 
  } 
    
}