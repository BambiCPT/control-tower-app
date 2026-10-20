import { ChangeDetectionStrategy, Component, input } from '@angular/core';

/** Three squares plus a label. Also the loading indicator for lists and panes. */
@Component({
  selector: 'ct-typing-indicator',
  standalone: true,
  templateUrl: './typing-indicator.component.html',
  styleUrl: './typing-indicator.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TypingIndicatorComponent {
  readonly label = input.required<string>();
}
