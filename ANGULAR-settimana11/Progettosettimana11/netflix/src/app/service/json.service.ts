import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Film } from '../models/film';
import { Favorite } from '../models/favorite';
import { AuthData } from '../auth/auth.data';

@Injectable({
  providedIn: 'root'
})
export class JsonService {

  baseURL = environment.baseURL;

  constructor(private http: HttpClient) { }

  //RECUPERO CARD FILM
  getFilm(): any {
    return this.http.get<Film[]>(`${this.baseURL}movies-popular`)
  }

  //AGGIUNGERE FILM FAVORITI
  AddFav(fav: Favorite) {
    return this.http.post<Favorite>(`${this.baseURL}favorites`, fav);
  }

  //RECUPERO FILM FAVORITI
  recuperaFav(id: number) {
    return this.http.get<Favorite[]>(`${this.baseURL}favorites?userId=${id}`);
  }

  //DETTAGLI FILM
  filmDetails(id: number) {
    return this.http.get<Film>(`${this.baseURL}movies-popular/${id}`);
  }

  //CANCELLARE FILM FAVORITI
  deleteFav(id: number) {
    return this.http.delete(`${this.baseURL}favorites/${id}`)
  }

  //RECUPERA ID UTENTE
  recuperoIdUser(): number | null {
    const user = localStorage.getItem('user');
    if (user) {
      const userData: AuthData = JSON.parse(user);
      return userData.user.id;
    }
    return null;
  }

}

