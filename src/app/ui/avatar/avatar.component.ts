import { ChangeDetectionStrategy, Component, computed, input } from '@angular/core';
import { CtStatus, StatusDotComponent } from '../status-dot/status-dot.component';

export type CtAvatarSize = 'xs' | 'sm' | 'md' | 'xl';
export type CtAvatarTone = 1 | 2 | 3 | 4 | 'self';

/** Lists, members and the profile editor use rounded squares; chat messages use circles. */
@Component({
  selector: 'ct-avatar',
  standalone: true,
  imports: [StatusDotComponent],
  templateUrl: './avatar.component.html',
  styleUrl: './avatar.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AvatarComponent {
  readonly name = input.required<string>();
  readonly size = input<CtAvatarSize>('md');
  readonly shape = input<'square' | 'circle'>('square');
  readonly tone = input<CtAvatarTone>(1);
  readonly status = input<CtStatus | null>(null);
  protected readonly initials = computed(() => {
    const parts = this.name().trim().split(/\s+/).filter(Boolean);
    return ((parts[0]?.[0] ?? '') + (parts.length > 1 ? parts[parts.length - 1][0] : parts[0]?.[1] ?? '')).toUpperCase();
  });
}
