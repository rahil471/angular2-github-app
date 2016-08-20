import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Http, Response } from '@angular/http'

@Component({
  moduleId: module.id,
  selector: 'app-repo-details',
  templateUrl: 'repo-details.component.html'
})
export class RepoDetailsComponent implements OnInit {
  welcome : string;
  user : string;
  repo: string;
  commits : any;
  constructor(private _route : ActivatedRoute, private _http : Http) {
    this.welcome = "List of Commits for";
  }
  ngOnInit() {
    this._route.params.subscribe((params) => {
      this.user = params['user'];
      this.repo = params['repo'];
      this._http.get("https://api.github.com/repos/"+this.user+"/"+this.repo+"/commits")
        .map((response : Response) => response.json())
        .subscribe((data) => {
          this.commits = data
        }, (err) => {
          console.log(err);
        })
    }, (err) => {
      console.log(err);
    })
  }

}
