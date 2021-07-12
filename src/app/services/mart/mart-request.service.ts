import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class MartRequestService {

  ROOT_URL = 'http://localhost:8080/' ;
  httpOptions = {
    headers: new HttpHeaders ({
      'Accept' : 'application/json',
      'Content-Type' : 'application/json',
      'Access-Control-Allow-Origin' : '*'
    })
  }
  constructor(private httpClient : HttpClient) { }

  // Get all resources
  getAllResources() {
    return this.httpClient.get(this.ROOT_URL, this.httpOptions)
  }
}
