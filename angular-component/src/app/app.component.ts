import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  template: `
    <message-reverser [message]="'Hello, Angular!'"></message-reverser>
  `,
})
export class AppComponent  { name = 'Angular'; }
