import { Component, OnInit } from '@angular/core';
import { Http, Response } from '@angular/http';
import {ROUTER_DIRECTIVES} from '@angular/router';

import { HomeService } from './home.service';

@Component({
  moduleId: module.id,
  selector: 'app-home',
  templateUrl: 'home.component.html',
  styleUrls: ['home.component.css'],
  directives : [ROUTER_DIRECTIVES],
  providers: [HomeService]
})
export class HomeComponent implements OnInit {
  welcome : string;
  githubUsername : string;
  repos : any[];
  constructor(private _http : Http, private _homeService : HomeService) {
    this.welcome = "Welcome to Ciphyapp";
  }
  
  fetchRepos(username : string) {
    this._homeService.fetchRepos(username).subscribe((data) => {
        this.repos = data;
      }, (err) => {
        console.log(err);
      })      
  }
  
  
  ngOnInit() { 
  }

}
