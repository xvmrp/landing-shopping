import { ChangeDetectionStrategy, Component } from '@angular/core';

/** Dato práctico del local (dirección, horario, medios de pago). */
interface DatoTienda {
  readonly icono: string;
  readonly texto: string;
}

@Component({
  selector: 'app-location',
  templateUrl: './location.component.html',
  styleUrl: './location.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LocationComponent {
  protected readonly urlMapa = 'https://www.google.com/maps?q=Santa+Rosa+8201,+Santiago,+Chile';

  protected readonly datos: readonly DatoTienda[] = [
    { icono: '📍', texto: 'Santa Rosa 8201, Santiago' },
    { icono: '🕒', texto: 'Lun a sáb 10:00–20:00 · Dom 11:00–15:00' },
    { icono: '💳', texto: 'Paga en 3 cuotas sin interés en tienda' },
  ];
}
