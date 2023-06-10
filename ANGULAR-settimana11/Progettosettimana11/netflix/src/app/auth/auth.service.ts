import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, throwError } from 'rxjs';
import { JwtHelperService } from '@auth0/angular-jwt';
import { tap, catchError } from 'rxjs/operators';
import { AuthData } from './auth.data';
import { environment } from 'src/environments/environment';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  jwtHelper = new JwtHelperService(); // Serve per leggere e validare il token
  baseURL = environment.baseURL;
  private authSubj = new BehaviorSubject<null | AuthData>(null); // Serve per comunicare in tempo reale all'applicazione la presenza dell'utente autenticato
  utente!: AuthData;
  user$ = this.authSubj.asObservable();


  constructor(private http: HttpClient ,private router:Router) { }


  login(data: { email: string; password: string }) {
    return this.http.post<AuthData>(`${this.baseURL}login`, data).pipe(
        tap((data) => {
            console.log(data);
            this.authSubj.next(data); // Il BehaviourSubject riceve i dati del login per poi passarli alla proprietà user$
            this.utente = data;
            console.log(this.utente);
            localStorage.setItem('user', JSON.stringify(data)); // Il localStorage memorizza l'oggetto utente completo di token
        }),
        catchError(this.errors)
    );
}

restore() {
    const user = localStorage.getItem('user');
    if (!user) {
        return;
    }
    const userData: AuthData = JSON.parse(user);
    if (this.jwtHelper.isTokenExpired(userData.accessToken)) {
        return;
    }
    this.authSubj.next(userData);

}

signup(data: {
    nome: string;
    cognome: string;
    email: string;
    password: string;
}) {
    return this.http.post(`${this.baseURL}register`, data);
}

logout() {
    this.authSubj.next(null);
    localStorage.removeItem('user');
    this.router.navigate(['/']);
    alert("CIAO,RIEFFETTUA IL LOGIN PER ACCEDERE");
}


private errors(err: any) {
    switch (err.error) {
        case 'Email already exists':
            return throwError('Utente già presente');
            break;

        case 'Email format is invalid':
            return throwError('Formato mail non valido');
            break;

        default:
            return throwError('Errore nella chiamata');
            break;
    }
}





}

