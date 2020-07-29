import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  
  apiUrl='https://jsonplaceholder.typicode.com/users';
  API_KEY = 'YOUR_API_KEY';


  constructor(private http: HttpClient) { }

  myMethod() {
    return console.log('Hey, what is up!');
  }

  getBeer() {
    return this.http.get('https://jsonplaceholder.typicode.com/users')
  }

}
