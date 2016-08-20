import { Injectable } from '@angular/core';
import {Http, Response} from '@angular/http';

@Injectable()
export class HomeService {
    constructor(private _http: Http) {
        
    }
    fetchRepos(username : string) {
        return this._http.get('https://api.github.com/users/'+username+'/repos')
            .map((response : Response) => response.json());
    }
}