import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { MartRequestService } from 'src/app/services/mart/mart-request.service';
import { TeleopService } from 'src/app/services/teleop/teleop.service';
@Component({
  selector: 'app-agv',
  templateUrl: './agv.component.html',
  styleUrls: ['./agv.component.scss']
})
export class AgvComponent implements OnInit, OnDestroy {
  BASE_URL = 'http://192.168.9.128:8080';
  device : any ;
  devices : any[] = [];
  deviceSelected : any ;
  agvSpeedValue = 0 ;
  agvSpeedAngularValue = 0;
  connectionState : boolean = false;
  actionResp : any ;

  colorScheme = {
    domain: ['#5AA454', '#E44D25', '#CFC0BB', '#7aa3e5', '#a8385d', '#aae3f5']
  };

  selectedDeviceSub: Subscription = new Subscription;
  devicesSub : Subscription = new Subscription ;
  constructor(private martRequest : MartRequestService, private teleop : TeleopService) { 
    this.selectedDeviceSub = this.teleop.subSelectedDevice.subscribe(response => {
      this.deviceSelected = response;
    })
    this.devicesSub = this.teleop.subDevices.subscribe(response => {
      this.devices = response ;
      console.log(this.devices)
    })
  }

  ngOnInit(): void {
   
  }
  ngOnDestroy() : void {
    this.devicesSub.unsubscribe();
    this.selectedDeviceSub.unsubscribe();
  }
  formatLabel(value: number) {
    if (value >= 1000) {
      return Math.round(value / 1000) + 'k';
    }

    return value;
  }

  onSelect(data: any): void {
    console.log('Item clicked', JSON.parse(JSON.stringify(data)));
  }

  onActivate(data: any): void {
    console.log('Activate', JSON.parse(JSON.stringify(data)));
  }

  onDeactivate(data: any): void {
    console.log('Deactivate', JSON.parse(JSON.stringify(data)));
  }

  onAction(type: string){
    if(typeof this.deviceSelected !== "undefined"){
      //console.log(this.deviceSelected);
      const url = this.BASE_URL+this.devices[this.deviceSelected].location;
      //console.log(url);
      let link : any;
      this.devices[this.deviceSelected].actions.forEach((element:any) => {
        //console.log(element.length)
        //console.log(element.indexOf(type))
        if(element.includes('#'+type) && (element.length - element.indexOf(type) == type.length )) {
          link = element;
          console.log(link);
        }
      });
      this.martRequest.runAction(url, link, type).subscribe(response => {
        this.actionResp = response;
      })
    } else {
      console.log("Select device before")
    }
    
  }
  onAttribute(attribute: string ,value: any) {
    if(typeof this.deviceSelected !== "undefined"){
      const url = this.BASE_URL+this.devices[this.deviceSelected].location;
      const kind = this.devices[this.deviceSelected].kind;
      console.log(url);
      console.log(kind);
      
      this.martRequest.setAttribute(url,kind,attribute,value).subscribe(response => {
        console.log(response);
      })
    } else {
      console.log("Select device before")
    }
  }
  setConnection() {
    console.log(this.deviceSelected);
    /*
    if(typeof this.deviceSelected !== "undefined" && this.connectionState){
      this.onAction("disconnect");
      this.onAttribute("connection.state", false);
      this.connectionState = false ;
      console.log("Disconnection successful");
    } else if(typeof this.deviceSelected !== "undefined" && !this.connectionState){
      this.onAction("connect");
      this.onAttribute("connection.state", true);
      this.connectionState = true ;
      console.log("Connection successful")
    }*/
  }
  agvSpeed() {
    console.log(this.agvSpeedValue);
    this.onAttribute('speed.linear', this.agvSpeedValue);
  }
  agvSpeedAngular() {
    console.log(this.agvSpeedAngularValue);
    this.onAttribute('speed.angular', this.agvSpeedAngularValue);
  }

  onChange(value:any) {
    
    //this.teleop.setSelectedDevice(this.deviceSelected);
    
    this.connectionState = (this.devices[this.deviceSelected].attributes["connection.state"] === 'true');
    console.log(this.connectionState);
  }

}
