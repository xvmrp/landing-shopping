import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-hero',
  templateUrl: './hero.component.html',
  styleUrl: './hero.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HeroComponent {
  /** Franja decorativa naranjo/verde bajo el hero: 12 baldosas. */
  protected readonly baldosas = Array.from({ length: 12 }, (_, i) => i);
}
