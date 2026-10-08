import { Directive, ElementRef, OnDestroy, Renderer2, inject, input } from '@angular/core';
import { DOCUMENT } from '@angular/common';

/** Light chip, 13/600. Right of server-rail icons, above icon buttons. Styles: styles/_tooltip.scss (global). */
@Directive({
  selector: '[ctTooltip]',
  standalone: true,
  host: {
    '(mouseenter)': 'show()', '(focus)': 'show()', '(mouseleave)': 'hide()', '(blur)': 'hide()', '(keydown.escape)': 'hide()',
  },
})
export class CtTooltipDirective implements OnDestroy {
  readonly ctTooltip = input.required<string>();
  readonly ctTooltipPlacement = input<'right' | 'top'>('right');
  private readonly el = inject<ElementRef<HTMLElement>>(ElementRef);
  private readonly doc = inject(DOCUMENT);
  private readonly r = inject(Renderer2);
  private tip: HTMLElement | null = null;

  show() {
    if (this.tip || !this.ctTooltip()) return;
    const tip = this.r.createElement('div') as HTMLElement;
    const placement = this.ctTooltipPlacement();
    tip.className = `ct-tooltip ct-tooltip--${placement}`;
    tip.setAttribute('role', 'tooltip');
    tip.textContent = this.ctTooltip();
    this.r.appendChild(this.doc.body, tip);
    const host = this.el.nativeElement.getBoundingClientRect();
    const t = tip.getBoundingClientRect();
    const gap = 12;
    const left = placement === 'right' ? host.right + gap : host.left + host.width / 2 - t.width / 2;
    const top = placement === 'right' ? host.top + host.height / 2 - t.height / 2 : host.top - t.height - gap;
    tip.style.left = `${Math.round(left)}px`;
    tip.style.top = `${Math.round(top)}px`;
    this.tip = tip;
  }
  hide() { this.tip?.remove(); this.tip = null; }
  ngOnDestroy() { this.hide(); }
}
