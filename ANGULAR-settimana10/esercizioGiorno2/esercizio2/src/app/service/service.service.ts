import { Injectable } from '@angular/core';
import { Interfaccia } from '../models/interfaccia';

@Injectable({
  providedIn: 'root'
})
export class ServiceService {
infoPost:Interfaccia[] = [];
postCancellati: number = 0;
  constructor() { }

  async getData() {
    return (await fetch('assets/db.json')).json();
  }

}
