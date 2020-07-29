import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {HttpService} from '../http.service'

@Component({
  selector: 'app-breweries',
  templateUrl: './breweries.component.html',
  styleUrls: ['./breweries.component.scss']
})
export class BreweriesComponent implements OnInit {

  users: Object;
  
  constructor(private _http: HttpService) { }

  ngOnInit() {
    this._http.getBeer().subscribe(data=>{
      this.users = data;
    })
  }

}
