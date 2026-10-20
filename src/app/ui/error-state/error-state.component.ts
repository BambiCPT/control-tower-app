import { ChangeDetectionStrategy, Component, input, output } from '@angular/core';
import { ButtonComponent } from '../button/button.component';
import { IconComponent } from '../icon/icon.component';

/** Inline error: red outline, alert icon, plain sentence, one retry action. */
@Component({
  selector: 'ct-error-state',
  standalone: true,
  imports: [ButtonComponent, IconComponent],
  templateUrl: './error-state.component.html',
  styleUrl: './error-state.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ErrorStateComponent {
  readonly title = input('Something went wrong');
  readonly description = input('');
  readonly retryLabel = input('Try again');
  readonly retry = output<void>();
}
