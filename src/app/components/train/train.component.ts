import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { MartRequestService } from 'src/app/services/mart/mart-request.service';
import { TeleopService } from 'src/app/services/teleop/teleop.service';

@Component({
  selector: 'app-train',
  templateUrl: './train.component.html',
  styleUrls: ['./train.component.scss']
})
export class TrainComponent implements OnInit {
  BASE_URL = 'http://192.168.9.128:8080';
  deviceSelected : any ;
  devices : any[] = [];
  actionResp : any ;
  light : boolean = false ;
  wagonNoise : boolean = false;
  trainNoise : boolean = false ;
  honk : boolean = false ;
  trainSpeed = 0;
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
    //this.selectedDeviceSub.unsubscribe();
  }

  onAction(type: string){
    if(typeof this.deviceSelected !== "undefined"){
      if(type.includes('stop')) {
        this.trainSpeed = 0;
      }
      console.log(this.devices[this.deviceSelected]);
      const url = this.BASE_URL+this.devices[this.deviceSelected].location;
      console.log(url);
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
  setLight() {
    if(typeof this.deviceSelected !== "undefined"){
      this.light = !this.light ;
      console.log(this.light);
      const url = this.BASE_URL+this.devices[this.deviceSelected].location;
      const kind = this.devices[this.deviceSelected].kind;
      let link : any;
      const type = "set_light";
      this.devices[this.deviceSelected].actions.forEach((element:any) => {
        //console.log(element.length)
        //console.log(element.indexOf(type))
        if(element.includes('#'+type) && (element.length - element.indexOf(type) == type.length )) {
          link = element;
          console.log(link);
        }
      });
      this.martRequest.setAttribute(url,kind,"light.state",this.light).subscribe(response => {
        console.log(response)
        this.martRequest.runAction(url, link, type).subscribe(response => {
          this.actionResp = response;
        })
      })
    }
  }
  setWagonNoise(){
    if(typeof this.deviceSelected !== "undefined"){
      this.wagonNoise = !this.wagonNoise ;
      console.log(this.wagonNoise);
      const url = this.BASE_URL+this.devices[this.deviceSelected].location;
      const kind = this.devices[this.deviceSelected].kind;
      let link : any;
      const type = "set_wagon_noise";
      this.devices[this.deviceSelected].actions.forEach((element:any) => {
        //console.log(element.length)
        //console.log(element.indexOf(type))
        if(element.includes('#'+type) && (element.length - element.indexOf(type) == type.length )) {
          link = element;
          console.log(link);
        }
      });
      this.martRequest.setAttribute(url,kind,"wagon.noise",this.wagonNoise).subscribe(response => {
        console.log(response)
        this.martRequest.runAction(url, link, type).subscribe(response => {
          this.actionResp = response;
        })
      })
    }

  }
  setTrainNoise() {
    if(typeof this.deviceSelected !== "undefined"){
      this.trainNoise = !this.trainNoise ;
      console.log(this.trainNoise);
      const url = this.BASE_URL+this.devices[this.deviceSelected].location;
      const kind = this.devices[this.deviceSelected].kind;
      let link : any;
      const type = "set_train_noise";
      this.devices[this.deviceSelected].actions.forEach((element:any) => {
        //console.log(element.length)
        //console.log(element.indexOf(type))
        if(element.includes('#'+type) && (element.length - element.indexOf(type) == type.length )) {
          link = element;
          console.log(link);
        }
      });
      this.martRequest.setAttribute(url,kind,"train.noise",this.trainNoise).subscribe(response => {
        console.log(response)
        this.martRequest.runAction(url, link, type).subscribe(response => {
          this.actionResp = response;
        })
      })
    }

  }
  setHonk() {
    if(typeof this.deviceSelected !== "undefined"){
      this.honk = !this.honk ;
      console.log(this.honk);
      const url = this.BASE_URL+this.devices[this.deviceSelected].location;
      const kind = this.devices[this.deviceSelected].kind;
      let link : any;
      const type = "set_honk";
      this.devices[this.deviceSelected].actions.forEach((element:any) => {
        //console.log(element.length)
        //console.log(element.indexOf(type))
        if(element.includes('#'+type) && (element.length - element.indexOf(type) == type.length )) {
          link = element;
          console.log(link);
        }
      });
      this.martRequest.setAttribute(url,kind,"honk.state",this.honk).subscribe(response => {
        console.log(response)
        this.martRequest.runAction(url, link, type).subscribe(response => {
          this.actionResp = response;
        })
      })
    }

  }
  setSpeed() {
    console.log(this.trainSpeed)
    console.log(this.devices[this.deviceSelected]);
    if(typeof this.deviceSelected !== "undefined"){
      const url = this.BASE_URL+this.devices[this.deviceSelected].location;
      const kind = this.devices[this.deviceSelected].kind;
      let link : any;
      const type = "setspeed";
      this.devices[this.deviceSelected].actions.forEach((element:any) => {
        //console.log(element.length)
        //console.log(element.indexOf(type))
        if(element.includes('#'+type) && (element.length - element.indexOf(type) == type.length )) {
          link = element;
          console.log(link);
        }
      });
      this.martRequest.setAttribute(url,kind,"train.speed",this.trainSpeed).subscribe(response => {
        console.log(response)
        this.martRequest.runAction(url, link, type).subscribe(response => {
          this.actionResp = response;
        })
      })
    }
  }

}
