import { Component, computed, effect, OnInit, signal, WritableSignal } from '@angular/core';

@Component({
    selector: 'app-signals',
    imports: [],
    templateUrl: './signals.component.html',
    styleUrl: './signals.component.scss'
})
export class SignalsComponent implements OnInit {

  // Writable signal
  public places: WritableSignal<string[]> = signal<string[]>([]);
  // Computed signals
  public totalLugares = computed(() => this.places().length);
  public lugaresConcatenados = computed(() => this.places().join(', '));
  public lugaresFiltrados = computed(() =>
    this.places().filter((lugar) => lugar.startsWith('B'))
  );


  public constructor(){
      // Effect para realizar una acción secundaria cada vez que cambia `places`
      effect(() => {
      console.log('La lista de lugares ha cambiado:', this.places());
    });
  }

  ngOnInit():void {
    // Usar set() para sobrescribir el array completo
    this.places.set(['Playa', 'Montaña']);
    console.log('After set:', this.places()); // ['Playa', 'Montaña']

    // Usar update() para añadir un lugar basado en el estado actual
    this.places.update((currentPlaces) => [...currentPlaces, 'Bosque']);
    console.log('After update:', this.places()); // ['Playa', 'Montaña', 'Bosque']

    // Computed signal para calcular el total de lugares
    console.log('Total de lugares:', this.totalLugares()); // 3

    // Computed signal para obtener los lugares como una cadena concatenada
    console.log('Lugares concatenados:', this.lugaresConcatenados()); // 'Playa, Montaña, Bosque'

    // Computed signal para filtrar lugares que comienzan con "B"
    console.log('Lugares filtrados:', this.lugaresFiltrados()); // ['Bosque']
  }

  // Método para añadir un lugar
  addLugar() {
    this.places.update((currentPlaces) => [...currentPlaces, `Lugar ${currentPlaces.length + 1}`]);
  }

}
