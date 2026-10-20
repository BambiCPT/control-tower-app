import { ChangeDetectionStrategy, Component, input } from '@angular/core';
import { IconComponent } from '../icon/icon.component';
import { CtIconName } from '../icon/icon-paths';

@Component({
  selector: 'ct-icon-button',
  standalone: true,
  imports: [IconComponent],
  templateUrl: './icon-button.component.html',
  styleUrl: './icon-button.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class IconButtonComponent {
  readonly icon = input.required<CtIconName>();
  /** Required: icon buttons have no visible text. */
  readonly label = input.required<string>();
  readonly variant = input<'primary' | 'secondary' | 'ghost'>('ghost');
  /** md = 44px, sm = 36px (composer send). */
  readonly size = input<'md' | 'sm'>('md');
  readonly pressed = input<boolean | null>(null);
  readonly disabled = input(false);
}
