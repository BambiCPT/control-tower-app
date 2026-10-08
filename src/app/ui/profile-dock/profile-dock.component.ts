import { ChangeDetectionStrategy, Component, ElementRef, HostListener, computed, inject, input, output, signal } from '@angular/core';
import { AvatarComponent } from '../avatar/avatar.component';
import { IconComponent } from '../icon/icon.component';
import { CtMenuItem, MenuComponent } from '../menu/menu.component';
import { CtStatus } from '../status-dot/status-dot.component';
import { CtTooltipDirective } from '../tooltip/tooltip.directive';

const STATUS_LABEL: Record<CtStatus, string> = { online: 'Online', idle: 'Idle', offline: 'Offline' };

@Component({
  selector: 'ct-profile-dock',
  standalone: true,
  imports: [AvatarComponent, IconComponent, MenuComponent, CtTooltipDirective],
  templateUrl: './profile-dock.component.html',
  styleUrl: './profile-dock.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ProfileDockComponent {
  private readonly host = inject(ElementRef<HTMLElement>);
  readonly name = input.required<string>();
  readonly status = input<CtStatus>('online');
  readonly navigate = output<'profile' | 'account' | 'preferences'>();
  protected readonly open = signal(false);
  protected readonly statusLabel = computed(() => STATUS_LABEL[this.status()]);
  protected readonly items = computed<CtMenuItem[]>(() => [
    { id: 'profile', label: 'Profile', icon: 'user' },
    { id: 'account', label: 'Account', icon: 'shield' },
    { id: 'preferences', label: 'Preferences', icon: 'sliders' },
    { id: 'status', label: this.statusLabel(), status: this.status(), dividerBefore: true },
  ]);
  protected pick(id: string) {
    this.open.set(false);
    if (id === 'profile' || id === 'account' || id === 'preferences') this.navigate.emit(id);
  }
  @HostListener('document:click', ['$event'])
  protected onDocClick(e: Event) { if (!this.host.nativeElement.contains(e.target)) this.open.set(false); }
  @HostListener('keydown.escape')
  protected onEsc() { this.open.set(false); }
}
