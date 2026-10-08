import { ChangeDetectionStrategy, Component, input, output } from '@angular/core';
import { AvatarComponent, CtAvatarTone } from '../avatar/avatar.component';
import { BadgeComponent } from '../badge/badge.component';
import { CtStatus } from '../status-dot/status-dot.component';

@Component({
  selector: 'ct-dm-list-item',
  standalone: true,
  imports: [AvatarComponent, BadgeComponent],
  templateUrl: './dm-list-item.component.html',
  styleUrl: './dm-list-item.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DmListItemComponent {
  readonly name = input.required<string>();
  readonly preview = input('');
  readonly time = input('');
  readonly unread = input(0);
  readonly status = input<CtStatus>('offline');
  readonly tone = input<CtAvatarTone>(1);
  readonly selected = input(false);
  readonly activated = output<void>();
}
