import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map , catchError } from 'rxjs/operators';
import { Subject } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class TeleopService {
  ROOT_URL = 'http://192.168.9.128:8080/' ;
  // All device from mart resources
  subDevices = new Subject<any>();
  private devices = [];

  // Device seleted for teleop
  subSelectedDevice = new Subject<any>() ;
  private selectedDevice : number = 0;

  // Http options
  httpOptions = {
    headers: new HttpHeaders ({
      'Accept' : 'application/json',
      'content-Type' : 'application/json',
      'Access-Control-Allow-Origin' : '*'
    })
  }
  constructor(private httpClient : HttpClient) { }
  // Emit all device
  emitAlldevices() {
    this.subDevices.next(this.devices.slice());
  }
  // Update all devices
  setDevices(value : any){
    this.devices = value;
    this.emitAlldevices();
  }
  // Emit selected device
  emitSelectedDevice() {
    this.subSelectedDevice.next(this.selectedDevice);
  }
  // Set selected device
  setSelectedDevice(value : number) {
    this.selectedDevice = value ;
    this.emitSelectedDevice();
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
}
