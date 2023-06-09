import { Component, OnInit } from '@angular/core';
import { JsonService } from 'src/app/service/json.service';
import { Film } from 'src/app/models/film';


@Component({
  selector: 'app-film',
  templateUrl: './film.component.html',
  styleUrls: ['./film.component.scss']
})
export class FilmComponent implements OnInit {

  films: Film[] = [];



  constructor(private jsonSrv: JsonService) { }

  ngOnInit(): void {
   this.jsonSrv.getFilm().subscribe((data: any) =>{
    this.films = data;
    console.log(this.films);
   })
  }

}
