import { ChangeDetectionStrategy, Component } from '@angular/core';

/** Reseña publicada en la página de Facebook del local. */
interface Testimonio {
  readonly texto: string;
  readonly autor: string;
}

@Component({
  selector: 'app-testimonials',
  templateUrl: './testimonials.component.html',
  styleUrl: './testimonials.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TestimonialsComponent {
  protected readonly testimonios: readonly Testimonio[] = [
    {
      texto: 'Buena atención, ropa y zapatos de calidad.',
      autor: 'Christian Eduardo Erices Aburto — hace 4 años',
    },
    { texto: 'Muy buen local, variedad y económico.', autor: 'Jose Roberto — hace 5 años' },
    { texto: 'Buena la atención y buenos precios.', autor: 'Valentina Cortés — hace 5 meses' },
  ];
}
