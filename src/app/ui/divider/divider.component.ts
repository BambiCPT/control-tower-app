import { ChangeDetectionStrategy, Component, input } from '@angular/core';

/** `date` centres a label (TODAY); `new` is the accent unread line with NEW at the right. */
@Component({
  selector: 'ct-divider',
  standalone: true,
  templateUrl: './divider.component.html',
  styleUrl: './divider.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DividerComponent {
  readonly label = input.required<string>();
  readonly variant = input<'date' | 'new'>('date');
}
