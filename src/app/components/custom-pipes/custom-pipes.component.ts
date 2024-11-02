import { Component } from '@angular/core';
import { PotencialPipe } from '@pipes/potencial-pipe.pipe';


@Component({
  selector: 'app-custom-pipes',
  standalone: true,
  imports: [PotencialPipe],
  templateUrl: './custom-pipes.component.html',
  styleUrl: './custom-pipes.component.scss'
})
export class CustomPipesComponent {
  potencia: number = 5; // El valor que pasaremos al pipe personalizado
}
