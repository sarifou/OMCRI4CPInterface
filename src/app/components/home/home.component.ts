import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  process = [] as any ;
  devices = [] as any ;
  httpOptions = {
    headers: new HttpHeaders ({
      'Access-Control-Allow-Origin' : '*'
    })
  }
  constructor(private client: HttpClient) { 
    this.devices = [
      {
        "title" : "Train",
        "active" : 10,
        "total" : 15,
        "resume" : [
          {
            "robot" : "train 1",
            "charge" : 100,
            "mode": "auto"
          },
          {
            "robot" : "train 2",
            "charge" : 67,
            "mode": "auto"
          },
          {
            "robot" : "train 3",
            "charge" : 10,
            "mode": "auto"
          }
        ]
      },
      {
        "title" : "AGV",
        "active" : 10,
        "total" : 15,
        "resume" : [
          {
            "robot" : "AGV 1",
            "charge" : 100,
            "mode": "auto"
          },
          {
            "robot" : "AGV 1",
            "charge" : 75,
            "mode": "tele"
          },
          {
            "robot" : "AGV 1",
            "charge" : 25,
            "mode": "tele"
          }
        ]
      },
      {
        "title" : "Drone",
        "active" : 10,
        "total" : 15,
        "resume" : [
          {
            "robot" : "Drone 1",
            "charge" : 25,
            "mode": "auto"
          },
          {
            "robot" : "Drone 1",
            "charge" : 75,
            "mode": "tele"
          },
          {
            "robot" : "Drone 1",
            "charge" : 100,
            "mode": "auto"
          }
        ]
      },
      {
        "title" : "Crane",
        "active" : 10,
        "total" : 15,
        "resume" : [
          {
            "robot" : "Crane 1",
            "charge" : 100,
            "mode": "auto"
          },
          {
            "robot" : "Crane 1",
            "charge" : 100,
            "mode": "auto"
          },
          {
            "robot" : "Crane 1",
            "charge" : 100,
            "mode": "auto"
          }
        ]
      }
    ]
    this.process = [
      {
        "id" : 1002012,
        "desc" : "Loading of the 120B container on to the agv 12 via the gantry 2",
        "client" : "Cherif",
        "state" : "In progress"
      },
      {
        "id" : 1204521,
        "desc" : "Loading of the 120B container on to the agv 12 via the gantry 2",
        "client" : "Cherif",
        "state" : "finish"
      },
      {
        "id" : 1204522,
        "desc" : "Loading of the 120B container on to the agv 12 via the gantry 2",
        "client" : "Cherif",
        "state" : "Interrupted"
      },
      {
        "id" : 1204521,
        "desc" : "Loading of the 120B container on to the agv 12 via the gantry 2",
        "client" : "Cherif",
        "state" : "finish"
      },
      {
        "id" : 1204521,
        "desc" : "Loading of the 120B container on to the agv 12 via the gantry 2",
        "client" : "Cherif",
        "state" : "finish"
      },
      {
        "id" : 1204521,
        "desc" : "Loading of the 120B container on to the agv 12 via the gantry 2",
        "client" : "Cherif",
        "state" : "finish"
      },
      {
        "id" : 1204521,
        "desc" : "Loading of the 120B container on to the agv 12 via the gantry 2",
        "client" : "Cherif",
        "state" : "finish"
      },
      {
        "id" : 1204521,
        "desc" : "Loading of the 120B container on to the agv 12 via the gantry 2",
        "client" : "Cherif",
        "state" : "finish"
      },
      {
        "id" : 1204521,
        "desc" : "Loading of the 120B container on to the agv 12 via the gantry 2",
        "client" : "Cherif",
        "state" : "finish"
      },
    ]
  }

  ngOnInit(): void {
    /*this.client.get("http://localhost:8585/stream?topic=/usb_cam/image_raw", this.httpOptions).subscribe(response=>{
      console.log(response)
    })*/
  }

}
