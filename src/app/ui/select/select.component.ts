import { ChangeDetectionStrategy, Component, ElementRef, HostListener, computed, inject, input, model, signal } from '@angular/core';
import { IconComponent } from '../icon/icon.component';
import { CtStatus, StatusDotComponent } from '../status-dot/status-dot.component';

export interface CtSelectOption { value: string; label: string; status?: CtStatus; }
let nextId = 0;

@Component({
  selector: 'ct-select',
  standalone: true,
  imports: [IconComponent, StatusDotComponent],
  templateUrl: './select.component.html',
  styleUrl: './select.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SelectComponent {
  private readonly host = inject(ElementRef<HTMLElement>);
  readonly id = `ct-select-${nextId++}`;
  readonly label = input('');
  readonly options = input.required<CtSelectOption[]>();
  readonly value = model<string>('');
  readonly disabled = input(false);
  protected readonly open = signal(false);
  protected readonly activeIndex = signal(0);
  protected readonly selected = computed(() => this.options().find(o => o.value === this.value()) ?? null);

  protected toggle() {
    if (this.disabled()) return;
    this.open.update(v => !v);
    this.activeIndex.set(Math.max(0, this.options().findIndex(o => o.value === this.value())));
  }
  protected choose(o: CtSelectOption) { this.value.set(o.value); this.open.set(false); }
  protected onKey(e: KeyboardEvent) {
    const n = this.options().length;
    if (e.key === 'Escape') { this.open.set(false); return; }
    if (e.key === 'ArrowDown' || e.key === 'ArrowUp') {
      e.preventDefault();
      if (!this.open()) { this.toggle(); return; }
      this.activeIndex.update(i => (i + (e.key === 'ArrowDown' ? 1 : n - 1)) % n);
    } else if ((e.key === 'Enter' || e.key === ' ') && this.open()) {
      e.preventDefault(); this.choose(this.options()[this.activeIndex()]);
    }
  }
  @HostListener('document:click', ['$event'])
  protected onDocClick(e: Event) { if (!this.host.nativeElement.contains(e.target)) this.open.set(false); }
}
