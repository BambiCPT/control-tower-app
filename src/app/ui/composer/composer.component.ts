import { ChangeDetectionStrategy, Component, computed, input, output, signal } from '@angular/core';
import { IconButtonComponent } from '../icon-button/icon-button.component';
import { TypingIndicatorComponent } from '../typing-indicator/typing-indicator.component';

@Component({
  selector: 'ct-composer',
  standalone: true,
  imports: [IconButtonComponent, TypingIndicatorComponent],
  templateUrl: './composer.component.html',
  styleUrl: './composer.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ComposerComponent {
  /** Conversation name: placeholder reads "Message {target}". */
  readonly target = input.required<string>();
  readonly typingLabel = input('');
  readonly disabled = input(false);
  readonly sent = output<string>();
  readonly attach = output<void>();
  protected readonly draft = signal('');
  protected readonly canSend = computed(() => this.draft().trim().length > 0 && !this.disabled());

  protected onInput(e: Event) { this.draft.set((e.target as HTMLTextAreaElement).value); }
  protected onKey(e: KeyboardEvent) {
    if (e.key === 'Enter' && !e.shiftKey) { e.preventDefault(); this.send(); }
  }
  protected send() {
    if (!this.canSend()) return;
    this.sent.emit(this.draft().trim());
    this.draft.set('');
  }
}
