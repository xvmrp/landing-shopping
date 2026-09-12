import { ChangeDetectionStrategy, Component } from '@angular/core';

/** Red social del local. */
interface RedSocial {
  readonly icono: string;
  readonly nombre: string;
  readonly url: string;
}

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FooterComponent {
  protected readonly anio = new Date().getFullYear();

  protected readonly redes: readonly RedSocial[] = [
    {
      icono: '📷',
      nombre: 'Instagram',
      url: 'https://www.instagram.com/elshopping.sr?igsh=cnY1OXpkNG0xYWt5',
    },
    { icono: '👍', nombre: 'Facebook', url: 'https://www.facebook.com/elshopping25/' },
  ];
}
