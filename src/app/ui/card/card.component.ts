import { ChangeDetectionStrategy, Component, input } from '@angular/core';

/** Settings card: uppercase header band, padded body, optional right-aligned footer ([ctCardFooter]). */
@Component({
  selector: 'ct-card',
  standalone: true,
  templateUrl: './card.component.html',
  styleUrl: './card.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CardComponent {
  readonly heading = input.required<string>();
}
