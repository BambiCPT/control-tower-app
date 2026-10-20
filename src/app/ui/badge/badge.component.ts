import { ChangeDetectionStrategy, Component, computed, input } from '@angular/core';

@Component({
  selector: 'ct-badge',
  standalone: true,
  templateUrl: './badge.component.html',
  styleUrl: './badge.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class BadgeComponent {
  readonly count = input.required<number>();
  readonly size = input<'md' | 'sm'>('md');
  protected readonly text = computed(() => (this.count() > 99 ? '99+' : String(this.count())));
}
