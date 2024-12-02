import { CommonModule } from '@angular/common';
import { Component, linkedSignal, signal } from '@angular/core';

@Component({
  selector: 'app-sincronizar-estado',
  imports: [CommonModule],
  templateUrl: './sincronizar-estado.component.html',
  styleUrl: './sincronizar-estado.component.scss'
})
export class SincronizarEstadoComponent {
  protected readonly productOptions = signal([
    { id: 1, name: 'Producto A' },
    { id: 2, name: 'Producto B' },
    { id: 3, name: 'Producto C' },
  ]);

  protected favoriteProductId = linkedSignal({
    source: this.productOptions,
    computation: (source, previous) => {
      const prevValue = previous?.value;
      return prevValue && source.some(p => p.id === prevValue) ? prevValue : null;
    },
  });

  protected changeProductOptions(): void {
    this.productOptions.set([
      { id: 1, name: 'Producto A' },
      { id: 4, name: 'Producto D' },
    ]);
  }

  protected setFavoriteProduct(productId: number): void {
    this.favoriteProductId.set(productId);
  }
}
