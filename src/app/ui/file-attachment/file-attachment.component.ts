import { ChangeDetectionStrategy, Component, input } from '@angular/core';
import { IconComponent } from '../icon/icon.component';

@Component({
  selector: 'ct-file-attachment',
  standalone: true,
  imports: [IconComponent],
  templateUrl: './file-attachment.component.html',
  styleUrl: './file-attachment.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FileAttachmentComponent {
  readonly name = input.required<string>();
  /** e.g. "PDF · 214 KB" */
  readonly meta = input('');
  readonly href = input<string | null>(null);
}
