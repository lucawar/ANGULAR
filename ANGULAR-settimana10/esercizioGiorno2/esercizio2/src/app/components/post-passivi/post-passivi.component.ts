import { Component, OnInit } from '@angular/core';
import { Interfaccia } from 'src/app/models/interfaccia';
import { ServiceService } from 'src/app/service/service.service';

@Component({
  selector: 'app-post-passivi',
  templateUrl: './post-passivi.component.html',
  styleUrls: ['./post-passivi.component.scss']
})
export class PostPassiviComponent implements OnInit {

  infoPost: Interfaccia[] = [];

  constructor(private postSrv: ServiceService) {
    this.postSrv.getData().then((response) => {
      this.infoPost = response;
    });
  }

  ngOnInit(): void {
  }

}
