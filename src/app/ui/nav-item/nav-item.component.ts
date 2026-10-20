import { ChangeDetectionStrategy, Component, input } from '@angular/core';
import { IconComponent } from '../icon/icon.component';
import { CtIconName } from '../icon/icon-paths';

/** Settings sidebar row. Use with routerLink or (click) on the host. */
@Component({
  selector: 'ct-nav-item',
  standalone: true,
  imports: [IconComponent],
  templateUrl: './nav-item.component.html',
  styleUrl: './nav-item.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class NavItemComponent {
  readonly label = input.required<string>();
  readonly icon = input<CtIconName | null>(null);
  readonly active = input(false);
}
