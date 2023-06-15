import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/auth/auth.service';
import { AuthData } from 'src/app/auth/auth.data';
import { Film } from 'src/app/models/film';
import { JsonService } from 'src/app/service/json.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {
  user!: AuthData | null;
  films!: Film;

  constructor(private authSrv: AuthService) { }

  ngOnInit(): void {
    this.authSrv.user$.subscribe((user) => { this.user = user; })
  }
}
