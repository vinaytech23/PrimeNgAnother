import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class MyApiService {

  url: string = "https://jsonplaceholder.typicode.com/posts";

  constructor(private http : HttpClient) { }

  getDataFromApi(){
    return this.http.get(this.url);
  }
}