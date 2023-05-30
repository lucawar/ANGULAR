import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ServiceService {

  constructor() { }

  async getData() {
    return (await fetch('assets/db.json')).json();
  }

}
