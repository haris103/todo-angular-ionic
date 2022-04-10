import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class TodoapiService {

  constructor(public http: HttpClient) { }
  getData(){
    const URL = 'https://jsonplaceholder.typicode.com/users';
    // const URL = 'https://api.publicapis.org/entries';
    return this.http.get(URL).toPromise();
  }
}
