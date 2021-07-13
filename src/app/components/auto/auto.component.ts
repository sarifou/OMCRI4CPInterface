import { Component, OnInit } from '@angular/core';
import { MartRequestService } from 'src/app/services/mart/mart-request.service'

@Component({
  selector: 'app-auto',
  templateUrl: './auto.component.html',
  styleUrls: ['./auto.component.scss']
})
export class AutoComponent implements OnInit {

  device : any ;
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
    this.device = "agv";
    this.single = [
      {
        "name": "speed",
        "value": 20
      }
    ];
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

}
