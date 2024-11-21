import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
    selector: 'app-disabling',
    imports: [CommonModule],
    templateUrl: './disabling.component.html',
    styleUrl: './disabling.component.scss'
})
export class DisablingComponent {
  pokemons = [
    { nombre: 'Ditto', habilidad: 'Transformación Inesperada', deshabilitado: false },
    { nombre: 'Magikarp', habilidad: 'Salto Olímpico', deshabilitado: false },
    { nombre: 'Jigglypuff', habilidad: 'Canción Inolvidable', deshabilitado: false },
    { nombre: 'Snorlax', habilidad: 'Sueño Profundo', deshabilitado: false }
  ];

  accion(pokemon: any): void {
    alert(`${pokemon.nombre} usa su habilidad: ${pokemon.habilidad}`);
  }

  toggleDeshabilitado(pokemon:any, index:number): void {
    if (!pokemon.deshabilitado) {
      this.pokemons[index].deshabilitado = true;
    }
  }
}
