import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { Route, RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { HomeComponent } from './components/home/home.component';
import { PostAttiviComponent } from './components/post-attivi/post-attivi.component';
import { PostPassiviComponent } from './components/post-passivi/post-passivi.component';
import { CardComponent } from './components/card/card.component';



const routes : Route[] = [
  {path: '',
  component: HomeComponent
  },
  {path: 'attivi',
  component: PostAttiviComponent
  },
  {path: 'non-attivi',
  component: PostPassiviComponent
  },
]

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    PostAttiviComponent,
    PostPassiviComponent,
    CardComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
