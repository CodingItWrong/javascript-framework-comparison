import { Component, Input } from '@angular/core';

@Component({
  selector: 'message-reverser',
  template: `
    <div>
      <input [(ngModel)]="message"/>
      <button (click)="reverse()">Reverse Message</button>
    </div>
  `
})
export class MessageReverserComponent {
  @Input() message: string;

  reverse(): void {
    this.message = this.message.split('').reverse().join('');
  }
}
