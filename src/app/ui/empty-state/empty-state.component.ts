import { ChangeDetectionStrategy, Component, input } from '@angular/core';

/** Dashed container, dashed mark tile, title and helper. Put the single next action in [ctEmptyAction]. */
@Component({
  selector: 'ct-empty-state',
  standalone: true,
  templateUrl: './empty-state.component.html',
  styleUrl: './empty-state.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class EmptyStateComponent {
  readonly title = input.required<string>();
  readonly description = input('');
  /** Control Tower mark, shown desaturated and dim. */
  readonly markSrc = input<string | null>(null);
}
