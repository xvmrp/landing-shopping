import { ChangeDetectionStrategy, Component, signal } from '@angular/core';

/** Enlace de navegación de la landing (ancla interna a una sección). */
interface EnlaceNav {
  readonly texto: string;
  readonly href: string;
}

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HeaderComponent {
  /** Enlaces del menú. Se recorren con @for en la plantilla. */
  protected readonly enlaces: readonly EnlaceNav[] = [
    { texto: 'Inicio', href: '#inicio' },
    { texto: 'Nosotros', href: '#nosotros' },
    { texto: 'Ubicación', href: '#ubicacion' },
  ];

  /** Dirección del local, reutilizada por el ícono 📍 de la cabecera. */
  protected readonly urlMapa = 'https://www.google.com/maps?q=Santa+Rosa+8201,+Santiago,+Chile';

  /** Estado del menú hamburguesa en móvil. */
  protected readonly menuAbierto = signal(false);

  protected alternarMenu(): void {
    this.menuAbierto.update((abierto) => !abierto);
  }

  protected cerrarMenu(): void {
    this.menuAbierto.set(false);
  }
}
