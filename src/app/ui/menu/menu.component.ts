import { ChangeDetectionStrategy, Component, input, output } from '@angular/core';
import { IconComponent } from '../icon/icon.component';
import { CtIconName } from '../icon/icon-paths';
import { CtStatus, StatusDotComponent } from '../status-dot/status-dot.component';

export interface CtMenuItem { id: string; label: string; icon?: CtIconName; status?: CtStatus; active?: boolean; dividerBefore?: boolean; }

@Component({
  selector: 'ct-menu',
  standalone: true,
  imports: [IconComponent, StatusDotComponent],
  templateUrl: './menu.component.html',
  styleUrl: './menu.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MenuComponent {
  readonly items = input.required<CtMenuItem[]>();
  readonly picked = output<string>();
}
