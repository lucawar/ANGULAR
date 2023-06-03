import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { Route, RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { TodoComponent } from './components/todo/todo.component';
import { CompletatiComponent } from './components/completati/completati.component';
import { HomeComponent } from './components/home/home.component';

const routes: Route[] = [
  { path: '',
   component: HomeComponent
  },
  { path: 'todo',
  component: TodoComponent
  },
  { path: 'completati',
  component: CompletatiComponent
  }
]

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    TodoComponent,
    CompletatiComponent,
    HomeComponent,
  ],
  imports: [BrowserModule, RouterModule.forRoot(routes), FormsModule],
  providers: [],
  bootstrap: [AppComponent],

})
export class AppModule {}
