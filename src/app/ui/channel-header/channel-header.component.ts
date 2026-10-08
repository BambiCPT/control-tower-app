import { ChangeDetectionStrategy, Component, input } from '@angular/core';

/** Left: avatar slot, title and subtitle. Right: icon-button slot. `underline` marks a server chat (48px accent bar). */
@Component({
  selector: 'ct-channel-header',
  standalone: true,
  templateUrl: './channel-header.component.html',
  styleUrl: './channel-header.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ChannelHeaderComponent {
  readonly title = input.required<string>();
  readonly subtitle = input('');
  readonly underline = input(false);
}
