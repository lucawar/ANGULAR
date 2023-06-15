import { Component, OnInit } from '@angular/core';
import { JsonService } from 'src/app/service/json.service';
import { AuthService } from 'src/app/auth/auth.service';
import { Film } from 'src/app/models/film';
import { Favorite } from 'src/app/models/favorite';
import { Observable } from 'rxjs';
import { AuthData } from 'src/app/auth/auth.data';


@Component({
  selector: 'app-film',
  templateUrl: './film.component.html',
  styleUrls: ['./film.component.scss']
})
export class FilmComponent implements OnInit {

  films: Film[] | undefined;
  favorite!: Favorite | null;
  filmFavorite: Favorite[] | undefined;
  user!: AuthData


  constructor(private jsonSrv: JsonService, private authSrv: AuthService) { }

  ngOnInit(): void {

    this.jsonSrv.getFilm().subscribe((data: any) => {
      this.films = data;
      console.log(this.films);
    })

    this.jsonSrv.recuperaFav(this.user?.user?.id!).subscribe((favorites: Favorite[]) => {

      this.filmFavorite = favorites;
      console.log('Film preferiti dagli utenti:',favorites);
    });
  }

  addToFavorites(movieId: number,) {
    const userId = this.jsonSrv.recuperoIdUser();
    const filmFav = this.filmFavorite?.find(
      (fav) => fav.userId === userId && fav.movieId === movieId
    );
    if (filmFav) {
      if (filmFav.id) {
        this.jsonSrv.deleteFav(filmFav.id).subscribe(() => {
          console.log('Film preferito rimosso con successo');
          const favoriteIndex = this.filmFavorite!.indexOf(filmFav);
          if (favoriteIndex !== -1) {
            this.filmFavorite!.splice(favoriteIndex, 1);
          }
        });
      } else {
        console.error('ID del film preferito mancante');
      }

    } else {
      const newFavorite: Favorite = {
        userId: userId!,
        movieId: movieId,
        id: 0,
      };
      this.jsonSrv.AddFav(newFavorite).subscribe((favorite: Favorite) => {
        this.filmFavorite!.push(favorite);
      });
    }

  }
}

