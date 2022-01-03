import { Component } from '@angular/core';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',
})
export class ListadoComponent {
  heroes: string[] = ['Link', 'kirby', 'Luigui', 'Fox', 'Zelda'];
  heroeEliminado: string = '';

  borrarHeroe(): void {
    this.heroeEliminado =  this.heroes.shift() || '';
  }
}
