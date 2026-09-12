import { ChangeDetectionStrategy, Component, signal } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrl: './about.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
  host: {
    '(document:keydown.escape)': 'cerrarFoto()',
  },
})
export class AboutComponent {
  /** Estado del lightbox de la foto del local. */
  protected readonly fotoAmpliada = signal(false);

  protected abrirFoto(): void {
    this.fotoAmpliada.set(true);
  }

  protected cerrarFoto(): void {
    this.fotoAmpliada.set(false);
  }
}
