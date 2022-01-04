import { Component } from '@angular/core';
import { Personaje } from '../interfaces/dbz.interface';
@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.css'],
})
export class MainPageComponent {
  personajes: Personaje[] = [
    {
      nombre: 'Kirby',
      poder: 1000,
    },
    {
      nombre: 'Link',
      poder: 2000,
    },
  ];

  nuevo: Personaje = {
    nombre: 'Zelda',
    poder: 10555,
  };

  agregarNuevoPersonaje(argumento: Personaje){
    this.personajes.push(argumento)
  }
}
