import { ChangeDetectionStrategy, Component, computed, input } from '@angular/core';
import { CT_ICON_PATHS, CtIconName } from './icon-paths';

/** 24-unit grid, stroke from --ct-icon-stroke, round caps and joins. Colour follows currentColor. */
@Component({
  selector: 'ct-icon',
  standalone: true,
  templateUrl: './icon.component.html',
  styleUrl: './icon.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class IconComponent {
  readonly name = input.required<CtIconName>();
  /** 16 chevrons in selects, 20 default, 24 add-server plus. */
  readonly size = input<16 | 20 | 24>(20);
  protected readonly paths = computed(() => CT_ICON_PATHS[this.name()]);
}
