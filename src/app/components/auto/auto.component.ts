import { Component, OnInit } from '@angular/core';
import { MartRequestService } from 'src/app/services/mart/mart-request.service';
import { TeleopService } from 'src/app/services/teleop/teleop.service';

@Component({
  selector: 'app-auto',
  templateUrl: './auto.component.html',
  styleUrls: ['./auto.component.scss']
})
export class AutoComponent implements OnInit {

  listDevice : any[] = [];
  device = "agv";
  deviceSelected : any ;
  connectionTrue = false ;
  connectionFalse = true ;
  connectionState = false ;
  BASE_URL = 'http://192.168.9.128:8080';
  constructor(private martRequest : MartRequestService, private teleop: TeleopService) { 
    
  }

  ngOnInit(): void {
    this.martRequest.getAllResources().subscribe(data => {
      this.listDevice = data.resources ;
      this.teleop.setDevices(this.listDevice);
    })
    this.teleop.subSelectedDevice.subscribe(select => {
      this.deviceSelected = select;
    })
    /*
    this.device = "agv";
    this.single = [
      {
        "name": "speed",
        "value": 20
      }
    ];
    const body = {agv
      "title": "AGVTEST",
      "summary": "AGV for test",
      "kind": "http://cristal.org/omcri4cp/agv#agv",
      "attributes": {
          "user" : "cherif",
          "ip": "127.0.0.1",
          "port": 9090
      }
  }

  /*
    this.martRequest.createResource("http://localhost:8080/port/agv", body).subscribe(
      response => {
        console.log(response);
      },
      error => {
        console.log(error)
      },
      () => {
        console.log("Process Completed")
      }
    )
    this.martRequest.createResource("http://localhost:8080/port/agv2", body).subscribe(
      response => {
        console.log(response);
      },
      error => {
        console.log(error)
      },
      () => {
        console.log("Process Completed")
      }
    )*/
  }
  selectDevice() {
    const nom = this.BASE_URL+this.listDevice[this.deviceSelected].title ;
    if(nom.includes("train") ){
      this.device = "train"
    } else if(nom.includes("agv")) {
      this.device = "agv"
    }
  }
  onChange(value:any) {
    this.teleop.setSelectedDevice(this.deviceSelected);
    //this.selectDevice()
  }
  setConnection() {
    console.log(this.deviceSelected);
    if(typeof this.deviceSelected !== "undefined"){
      const url = this.BASE_URL+this.listDevice[this.deviceSelected].location;
      if(!this.connectionState) {
        const type = "connect";
        let link : any;
        this.listDevice[this.deviceSelected].actions.forEach((element:any) => {
          //console.log(element.length)
          //console.log(element.indexOf(type))
          if(element.includes('#'+type) && (element.length - element.indexOf(type) == type.length )) {
            link = element;
            console.log(link);
          }
        });
        this.martRequest.runAction(url, link, type).subscribe(response => {
          console.log(response);
        })
      } else if (this.connectionState){
        const type = "disconnect";
        let link : any;
        this.listDevice[this.deviceSelected].actions.forEach((element:any) => {
          //console.log(element.length)
          //console.log(element.indexOf(type))
          if(element.includes('#'+type) && (element.length - element.indexOf(type) == type.length )) {
            link = element;
            console.log(link);
          }
        });
        this.martRequest.runAction(url, link, type).subscribe(response => {
          console.log(response);
        })
      } 
    }
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
}
