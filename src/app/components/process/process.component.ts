import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-process',
  templateUrl: './process.component.html',
  styleUrls: ['./process.component.scss']
})
export class ProcessComponent implements OnInit {

  orders = [] as any ;
  data: any[] = [];
  view: any[] = [200, 100];

  // options
  showLabels: boolean = true;
  animations: boolean = true;
  xAxis: boolean = true;
  yAxis: boolean = true;
  showYAxisLabel: boolean = true;
  showXAxisLabel: boolean = true;
  timeline: boolean = true;

  colorScheme = {
    domain: ['#ff6347']
  };
  constructor() {
    this.orders = [
      {
        "id" : 120146,
        "receiver" : "cherif",
        "state" : "In progress",
        "init_date" : "July 9 2021",
        "init_hour"  : "10h24",
        "final_date" : "July 10 2021",
        "final_hour" : "10h24"
      },
      {
        "id" : 120146,
        "receiver" : "cherif",
        "state" : "In progress",
        "init_date" : "July 9 2021",
        "init_hour"  : "10h24",
        "final_date" : "July 10 2021",
        "final_hour" : "10h24"
      },
      {
        "id" : 120146,
        "receiver" : "cherif",
        "state" : "In progress",
        "init_date" : "July 9 2021",
        "init_hour"  : "10h24",
        "final_date" : "July 10 2021",
        "final_hour" : "10h24"
      },
      {
        "id" : 120146,
        "receiver" : "cherif",
        "state" : "In progress",
        "init_date" : "July 9 2021",
        "init_hour"  : "10h24",
        "final_date" : "July 10 2021",
        "final_hour" : "10h24"
      },
      {
        "id" : 120146,
        "receiver" : "cherif",
        "state" : "In progress",
        "init_date" : "July 9 2021",
        "init_hour"  : "10h24",
        "final_date" : "July 10 2021",
        "final_hour" : "10h24"
      },
      {
        "id" : 120146,
        "receiver" : "cherif",
        "state" : "In progress",
        "init_date" : "July 9 2021",
        "init_hour"  : "10h24",
        "final_date" : "July 10 2021",
        "final_hour" : "10h24"
      },
      {
        "id" : 120146,
        "receiver" : "cherif",
        "state" : "In progress",
        "init_date" : "July 9 2021",
        "init_hour"  : "10h24",
        "final_date" : "July 10 2021",
        "final_hour" : "10h24"
      },
      {
        "id" : 120146,
        "receiver" : "cherif",
        "state" : "In progress",
        "init_date" : "July 9 2021",
        "init_hour"  : "10h24",
        "final_date" : "July 10 2021",
        "final_hour" : "10h24"
      },
      {
        "id" : 120146,
        "receiver" : "cherif",
        "state" : "In progress",
        "init_date" : "July 9 2021",
        "init_hour"  : "10h24",
        "final_date" : "July 10 2021",
        "final_hour" : "10h24"
      }
    ]
    this.data =  [
      {
        "name": "Orders",
        "series": [
          {
            "name": "Monday",
            "value": 25
          },
          {
            "name": "Tuesday",
            "value": 100
          },
          {
            "name": "Wednesday",
            "value": 120
          },
          {
            "name": "Friday",
            "value": 250
          },
          {
            "name": "Saturday",
            "value": 30
          },
          {
            "name": "Sunday",
            "value": 0
          }
        ]
      }  
  
    ];
    
   }

  ngOnInit(): void {
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

}
