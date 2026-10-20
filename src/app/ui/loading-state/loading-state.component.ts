import { ChangeDetectionStrategy, Component, input } from '@angular/core';
import { TypingIndicatorComponent } from '../typing-indicator/typing-indicator.component';

@Component({
  selector: 'ct-loading-state',
  standalone: true,
  imports: [TypingIndicatorComponent],
  templateUrl: './loading-state.component.html',
  styleUrl: './loading-state.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LoadingStateComponent {
  readonly label = input('Loading');
}
