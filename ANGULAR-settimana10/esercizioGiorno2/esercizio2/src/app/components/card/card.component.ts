import { Component, OnInit } from '@angular/core';
import { Interfaccia } from 'src/app/models/interfaccia';
import { ServiceService } from 'src/app/service/service.service';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit {

  infoPost: Interfaccia[] = [];

  constructor(private postSrv: ServiceService) {
    this.postSrv.getData().then((response) => {
      this.infoPost = response;
    })
   }

  ngOnInit(): void {
  }

}
