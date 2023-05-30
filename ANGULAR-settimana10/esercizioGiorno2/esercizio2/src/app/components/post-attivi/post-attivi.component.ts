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
  postCancellati: number = 0;

  constructor(private postSrv: ServiceService) {
    this.postSrv.getData().then((response) => {
      this.infoPost = response;
    })
   }

cancella(): void{
  this.infoPost = this.infoPost.filter(item => item.active !== true);
  this.postCancellati += 1
  console.log(this.infoPost)
}

ngOnInit(): void {
  }

}
