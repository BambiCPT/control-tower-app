import { ChangeDetectionStrategy, Component, computed, input } from '@angular/core';

export type CtStatus = 'online' | 'idle' | 'offline';
const LABEL: Record<CtStatus, string> = { online: 'Online', idle: 'Idle', offline: 'Offline' };

/** Online and idle are filled; offline is a hollow ring, so status never relies on colour alone. */
@Component({
  selector: 'ct-status-dot',
  standalone: true,
  templateUrl: './status-dot.component.html',
  styleUrl: './status-dot.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class StatusDotComponent {
  readonly status = input.required<CtStatus>();
  protected readonly label = computed(() => LABEL[this.status()]);
}
