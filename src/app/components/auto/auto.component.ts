import { Component, OnInit } from '@angular/core';
import { MartRequestService } from 'src/app/services/mart/mart-request.service'

@Component({
  selector: 'app-auto',
  templateUrl: './auto.component.html',
  styleUrls: ['./auto.component.scss']
})
export class AutoComponent implements OnInit {

  constructor(private martRequest : MartRequestService) { }

  ngOnInit(): void {
    this.martRequest.getAllResources().subscribe((data : any) => {
      console.log(data)
    })
  }

}
