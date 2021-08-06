import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map , catchError } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class MartRequestService {

  ROOT_URL = 'http://localhost:8080/' ;
  httpOptions = {
    headers: new HttpHeaders ({
      'Accept' : 'application/json',
      'content-Type' : 'application/json',
      'Access-Control-Allow-Origin' : '*'
    })
  }
  constructor(private httpClient : HttpClient) { }

  // Method to create resource
  createResource(baseURL : string, body : any ) {
    return this.httpClient.put(baseURL, body, this.httpOptions);
  }
  // Get all resources
  getAllResources() {
    return this.httpClient.get<any>(this.ROOT_URL, this.httpOptions);
  }
  // Function to run action
  runAction(url: string, link: string, action: string) {
    const headers = { 
      'Accept' : 'application/json',
      'content-Type' : 'application/json',
      'Access-Control-Allow-Origin' : '*'
    };
    let params = new HttpParams().append("action", action)
    const body = {
      "action" : link
    };
    const body_ = JSON.stringify(body);
    return this.httpClient.post(url, body_, {'headers':headers, 'params' : params})
  }
  // Function to update attribute
  setAttribute(url: string, kind : String, attribute : string, value : any) {
    var body : {[key : string] : any} = {};
    body["kind"] = kind ;
    body["attributes"] = {}
    body["attributes"][attribute] = value;
    /*let body = {
      "kind" : kind,
      "attributes": {}
    }
    body.attributes[attribute] = value ;*/
    const body_ = JSON.stringify(body);
    console.log(body_);
    return this.httpClient.post(url, body_, this.httpOptions);
  }
  deleteRessource() {

  }
}
