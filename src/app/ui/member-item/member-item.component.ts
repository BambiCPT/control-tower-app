import { ChangeDetectionStrategy, Component, input } from '@angular/core';
import { AvatarComponent, CtAvatarTone } from '../avatar/avatar.component';
import { CtStatus } from '../status-dot/status-dot.component';

@Component({
  selector: 'ct-member-item',
  standalone: true,
  imports: [AvatarComponent],
  templateUrl: './member-item.component.html',
  styleUrl: './member-item.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MemberItemComponent {
  readonly name = input.required<string>();
  readonly status = input<CtStatus>('offline');
  readonly tone = input<CtAvatarTone>(1);
}
