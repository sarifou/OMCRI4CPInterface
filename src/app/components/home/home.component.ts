import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  process = [] as any ;
  constructor() { 
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
  }

}
