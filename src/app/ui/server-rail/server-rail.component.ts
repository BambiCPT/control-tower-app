import { ChangeDetectionStrategy, Component, input, output } from '@angular/core';
import { IconComponent } from '../icon/icon.component';
import { CtServerState, ServerIconComponent } from '../server-icon/server-icon.component';
import { CtTooltipDirective } from '../tooltip/tooltip.directive';

export interface CtServer { id: string; label: string; name: string; state: CtServerState; count?: number; }

@Component({
  selector: 'ct-server-rail',
  standalone: true,
  imports: [IconComponent, ServerIconComponent, CtTooltipDirective],
  templateUrl: './server-rail.component.html',
  styleUrl: './server-rail.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ServerRailComponent {
  readonly servers = input.required<CtServer[]>();
  readonly dmActive = input(false);
  readonly markSrc = input.required<string>();
  readonly dmSelected = output<void>();
  readonly serverSelected = output<string>();
  readonly addServer = output<void>();
}
