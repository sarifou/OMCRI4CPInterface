import { Component, OnInit } from '@angular/core';
import { MartRequestService } from 'src/app/services/mart/mart-request.service'

@Component({
  selector: 'app-auto',
  templateUrl: './auto.component.html',
  styleUrls: ['./auto.component.scss']
})
export class AutoComponent implements OnInit {

  BASE_URL = 'http://localhost:8080';
  device : any ;
  listDevice : any[] = [];
  deviceSelected : any;
  single : any[] = [];
  view: any[] = [500, 400];
  legend: boolean = true;
  legendPosition: string = 'below';
  min : number = 0;
  max : number = 20;

  //Variable for AGV
  agvSpeedValue = 2 ;

  colorScheme = {
    domain: ['#5AA454', '#E44D25', '#CFC0BB', '#7aa3e5', '#a8385d', '#aae3f5']
  };

  constructor(private martRequest : MartRequestService) { 
    
  }

  ngOnInit(): void {
    this.martRequest.getAllResources().subscribe(data => {
      this.listDevice = data.resources ;
      console.log(this.listDevice);
    })
    this.device = "agv";
    this.single = [
      {
        "name": "speed",
        "value": 20
      }
    ];
    const body = {
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
      const url = this.BASE_URL+this.listDevice[this.deviceSelected].location;
      //console.log(url);
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
    } else {
      console.log("Select device before")
    }
    
  }
  onAttribute(attribute: string ,value: any) {
    if(typeof this.deviceSelected !== "undefined"){
      const url = this.BASE_URL+this.listDevice[this.deviceSelected].location;
      const kind = this.listDevice[this.deviceSelected].kind;
      console.log(url);
      console.log(kind);
      
      this.martRequest.setAttribute(url,kind,attribute,value).subscribe(response => {
        console.log(response);
      })
    } else {
      console.log("Select device before")
    }
  }
  agvSpeed() {
    console.log(this.agvSpeedValue);
    this.onAttribute('speed.linear', this.agvSpeedValue);
  }
}
