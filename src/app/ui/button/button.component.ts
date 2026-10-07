import { ChangeDetectionStrategy, Component, input } from '@angular/core';

export type CtButtonVariant = 'primary' | 'secondary' | 'ghost' | 'danger';

@Component({
  selector: 'ct-button',
  standalone: true,
  templateUrl: './button.component.html',
  styleUrl: './button.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ButtonComponent {
  readonly variant = input<CtButtonVariant>('secondary');
  readonly type = input<'button' | 'submit'>('button');
  readonly disabled = input(false);
}
