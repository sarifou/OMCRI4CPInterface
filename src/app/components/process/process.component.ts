import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-process',
  templateUrl: './process.component.html',
  styleUrls: ['./process.component.scss']
})
export class ProcessComponent implements OnInit {

  orders = [] as any ;

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
   }

  ngOnInit(): void {
  }

}
