import { ChangeDetectionStrategy, Component, input } from '@angular/core';
import type { Message } from '../../models/message.model';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-chat-bubble',
  imports: [CommonModule],
  templateUrl: './chatbubble.component.html',
  styleUrls: ['./chatbubble.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ChatBubbleComponent {
  // use input() function (field initializer)
  msg = input.required<Message>();

  isUser(): boolean {
    return this.msg().sender === 'user';
  }

  formattedTime(): string {
    try {
      return new Intl.DateTimeFormat(undefined, { hour: 'numeric', minute: 'numeric' })
        .format(new Date(this.msg().timestamp));
    } catch {
      return '';
    }
  }
}
