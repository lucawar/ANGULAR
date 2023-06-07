import { Component,ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'esercizio2';

  @ViewChild ('contenitoreForm', {static: true}) contenitoreForm!: NgForm;

  userForm = {
    scelta: ''
}

  user: any = {
    name: '',
    alterEgo: '',
    power: '',
    enemy: '',
    planet: '',
    weakness: ''
  }

  //FORM TD
  ngOnInit(): void {
    this.contenitoreForm.statusChanges?.subscribe(stato => {
      console.log(this.contenitoreForm);
      console.log(`Stato del form: ${stato}`);
  });

}

//FORM TD
submitForm() {
  console.log(`Form inviato: ${this.contenitoreForm}`);
  this.user.name = this.contenitoreForm.value.name;
  this.user.alterEgo = this.contenitoreForm.value.alterEgo;
  this.user.power = this.contenitoreForm.value.power;
  this.user.enemy = this.contenitoreForm.value.enemy;
  this.user.planet = this.contenitoreForm.value.planet;
  this.user.weakness = this.contenitoreForm.value.weakness;

  this.contenitoreForm.reset();
}


}
