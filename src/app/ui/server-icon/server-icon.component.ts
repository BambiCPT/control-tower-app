import { ChangeDetectionStrategy, Component, computed, input, output } from '@angular/core';
import { BadgeComponent } from '../badge/badge.component';
import { CtTooltipDirective } from '../tooltip/tooltip.directive';

export type CtServerState = 'default' | 'active' | 'unread' | 'muted';

/** One server is one conversation. The rail only shows where you are and what needs you. */
@Component({
  selector: 'ct-server-icon',
  standalone: true,
  imports: [BadgeComponent, CtTooltipDirective],
  templateUrl: './server-icon.component.html',
  styleUrl: './server-icon.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ServerIconComponent {
  /** Two-letter code, e.g. GC. Ignored when markSrc is set. */
  readonly label = input.required<string>();
  /** Full name, used for the tooltip and aria-label. */
  readonly name = input.required<string>();
  readonly state = input<CtServerState>('default');
  readonly count = input(0);
  /** Control Tower icon for the Direct messages entry. */
  readonly markSrc = input<string | null>(null);
  readonly selected = output<void>();
  protected readonly ariaLabel = computed(() => this.count() > 0 ? `${this.name()}, ${this.count()} unread` : this.name());
}
