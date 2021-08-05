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
  single : any[] = [];
  view: any[] = [500, 400];
  legend: boolean = true;
  legendPosition: string = 'below';
  min : number = 0;
  max : number = 20;

  colorScheme = {
    domain: ['#5AA454', '#E44D25', '#CFC0BB', '#7aa3e5', '#a8385d', '#aae3f5']
  };

  constructor(private martRequest : MartRequestService) { 
    
  }

  ngOnInit(): void {
    this.martRequest.getAllResources().subscribe(data=> {
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
    console.log(type);
    const url = this.BASE_URL+this.listDevice[0].location;
    console.log(url);
    let link : any;
    this.listDevice[0].actions.forEach((element:any) => {
      if(element.includes('#'+type)) {
        link = element;
        console.log(link);
      }
    });
    this.martRequest.runAction(url, link, type).subscribe(response => {
      console.log(response);
    })
  }

}
