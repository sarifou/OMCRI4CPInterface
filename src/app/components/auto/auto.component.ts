import { Component, OnInit } from '@angular/core';
import { MartRequestService } from 'src/app/services/mart/mart-request.service';
import { TeleopService } from 'src/app/services/teleop/teleop.service';

@Component({
  selector: 'app-auto',
  templateUrl: './auto.component.html',
  styleUrls: ['./auto.component.scss']
})
export class AutoComponent implements OnInit {

  BASE_URL = 'http://localhost:8080';
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

  constructor(private martRequest : MartRequestService, private teleop: TeleopService) { 
    
  }

  ngOnInit(): void {
    const debug = [
      {
      "title" : "sssssss"
      },
      {
        "title" : "sssssssss"
      },
      {
        "title" : "sssssss"
      }
    ]
    this.teleop.setDevices(debug);
    /*
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
}
