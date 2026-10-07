import { AfterViewInit, ChangeDetectionStrategy, Component, ElementRef, HostListener, effect, input, output, viewChild } from '@angular/core';

/** Same anatomy as a card: header band, body, footer. Scrim is --ct-bg-scrim. Escape and scrim click close it. */
@Component({
  selector: 'ct-modal',
  standalone: true,
  templateUrl: './modal.component.html',
  styleUrl: './modal.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ModalComponent {
  readonly open = input.required<boolean>();
  readonly heading = input.required<string>();
  readonly closed = output<void>();
  private readonly dialog = viewChild<ElementRef<HTMLElement>>('dialog');
  private opener: HTMLElement | null = null;

  constructor() {
    effect(() => {
      const d = this.dialog()?.nativeElement;
      if (this.open() && d) {
        this.opener = document.activeElement as HTMLElement | null;
        queueMicrotask(() => d.querySelector<HTMLElement>('[autofocus], button, input, select, textarea')?.focus());
      } else if (!this.open() && this.opener) { this.opener.focus(); this.opener = null; }
    });
  }
  @HostListener('document:keydown.escape') protected onEsc() { if (this.open()) this.closed.emit(); }
  protected onTab(event: Event) {
    const e = event as KeyboardEvent;
    const els = Array.from(this.dialog()!.nativeElement.querySelectorAll<HTMLElement>('button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])')).filter(x => !x.hasAttribute('disabled'));
    if (!els.length) return;
    const first = els[0], last = els[els.length - 1];
    if (e.shiftKey && document.activeElement === first) { e.preventDefault(); last.focus(); }
    else if (!e.shiftKey && document.activeElement === last) { e.preventDefault(); first.focus(); }
  }
}
