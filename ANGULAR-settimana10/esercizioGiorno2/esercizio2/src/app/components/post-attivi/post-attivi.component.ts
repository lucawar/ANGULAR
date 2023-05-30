import { Component, OnInit } from '@angular/core';
import { Interfaccia } from 'src/app/models/interfaccia';
import { ServiceService } from 'src/app/service/service.service';

@Component({
  selector: 'app-post-attivi',
  templateUrl: './post-attivi.component.html',
  styleUrls: ['./post-attivi.component.scss']
})
export class PostAttiviComponent implements OnInit {

  infoPost: Interfaccia[] = []

  constructor(private postSrv: ServiceService) {
    this.postSrv.getData().then((response) => {
      this.infoPost = response;
    })
   }

  ngOnInit(): void {
  }

}
