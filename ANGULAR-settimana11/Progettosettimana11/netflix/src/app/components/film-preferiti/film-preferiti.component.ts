import { Component, OnInit } from '@angular/core';
import { JsonService } from 'src/app/service/json.service';
import { Favorite } from 'src/app/models/favorite';
import { Film } from 'src/app/models/film';
import { AuthData } from 'src/app/auth/auth.data';


@Component({
  selector: 'app-film-preferiti',
  templateUrl: './film-preferiti.component.html',
  styleUrls: ['./film-preferiti.component.scss']
})
export class FilmPreferitiComponent implements OnInit {

  filmFav: Favorite[] | undefined;
  user!: AuthData

  constructor(private jsonSrv: JsonService) { }

  ngOnInit(): void {
    const userId = this.jsonSrv.recuperoIdUser();
    if (userId) {
      this.jsonSrv.recuperaFav(userId).subscribe((favorites: Favorite[]) => {
        this.filmFav = favorites
      })
    }
  }

  deleteFavorite(id: number) {
    this.jsonSrv.deleteFav(id).subscribe(() => {
      alert('FILM RIMOSSO CON')
    })
  }
}
