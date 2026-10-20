import { ChangeDetectionStrategy, Component, input, output } from '@angular/core';
import { AvatarComponent, CtAvatarTone } from '../avatar/avatar.component';
import { IconComponent } from '../icon/icon.component';

/** Direct messages and server chats share this row: circular 36px avatar, name and time on one line, text below. */
@Component({
  selector: 'ct-message',
  standalone: true,
  imports: [AvatarComponent, IconComponent],
  templateUrl: './message.component.html',
  styleUrl: './message.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MessageComponent {
  readonly author = input.required<string>();
  readonly time = input.required<string>();
  readonly tone = input<CtAvatarTone>(1);
  /** Follow-up from the same author: no avatar or name; the time shows in the gutter on hover. */
  readonly continued = input(false);
  readonly more = output<void>();
}
