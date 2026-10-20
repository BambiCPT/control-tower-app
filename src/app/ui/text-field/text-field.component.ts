import { ChangeDetectionStrategy, Component, input, model } from '@angular/core';
import { IconComponent } from '../icon/icon.component';
import { CtIconName } from '../icon/icon-paths';

let nextId = 0;

/** Default is the inset field used in forms; `filled` is the in-app conversation search. */
@Component({
  selector: 'ct-text-field',
  standalone: true,
  imports: [IconComponent],
  templateUrl: './text-field.component.html',
  styleUrl: './text-field.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TextFieldComponent {
  readonly id = `ct-field-${nextId++}`;
  readonly label = input<string>('');
  readonly placeholder = input('');
  readonly type = input<'text' | 'search' | 'email' | 'password'>('text');
  readonly icon = input<CtIconName | null>(null);
  readonly variant = input<'inset' | 'filled'>('inset');
  readonly disabled = input(false);
  readonly readonly = input(false);
  readonly invalid = input(false);
  readonly errorText = input('');
  readonly value = model('');
  protected onInput(e: Event) { this.value.set((e.target as HTMLInputElement).value); }
}
