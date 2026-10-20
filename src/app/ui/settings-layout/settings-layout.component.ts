import { ChangeDetectionStrategy, Component, input } from '@angular/core';

/** Profile / account pages: 300px sidebar on the column surface, content centred at 760px on the panel surface. */
@Component({
  selector: 'ct-settings-layout',
  standalone: true,
  templateUrl: './settings-layout.component.html',
  styleUrl: './settings-layout.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SettingsLayoutComponent {
  readonly title = input.required<string>();
}
