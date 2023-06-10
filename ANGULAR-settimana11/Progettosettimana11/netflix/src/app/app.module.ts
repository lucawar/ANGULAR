import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { Route, RouterModule } from '@angular/router';
import { AuthGuard } from './auth/auth.guard';

import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { FilmComponent } from './components/film/film.component';
import { FilmPreferitiComponent } from './components/film-preferiti/film-preferiti.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { ProfileComponent } from './components/profile/profile.component';

const routes: Route[] = [
  { path: '',
   component: LoginComponent
  },

  { path: 'profile',
    component : ProfileComponent
  },
  {path: 'register',
   component: RegisterComponent
  },
  {path: 'film',
  component: FilmComponent,
  },
]

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FilmComponent,
    FilmPreferitiComponent,
    LoginComponent,
    RegisterComponent,
    ProfileComponent
  ],
  imports: [BrowserModule, RouterModule.forRoot(routes), FormsModule, HttpClientModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
