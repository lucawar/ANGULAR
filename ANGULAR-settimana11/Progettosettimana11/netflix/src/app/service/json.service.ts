import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Film } from '../models/film';

@Injectable({
  providedIn: 'root'
})
export class JsonService {
  private url = 'http://localhost:4201/api/movie/popular';

  constructor(private http: HttpClient) { }
  films: Film[] = []

 getFilm():any {
  return this.http.get(this.url)
  }
}
