import { ChangeDetectionStrategy, Component, input } from '@angular/core';

/** Grid: rail 76 | column 248 | panel. Dock spans rail + column. Panel is inset 12px top, right and bottom. */
@Component({
  selector: 'ct-app-shell',
  standalone: true,
  templateUrl: './app-shell.component.html',
  styleUrl: './app-shell.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AppShellComponent {
  /** Show the 248px members pane inside the panel (server chats only). */
  readonly members = input(false);
}
