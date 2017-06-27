# JavaScript Framework Comparison

This is a completely unfair comparison of components in Angular, Ember, React, and Vue.

It's unfair because the component is trivial: all it does is allow text to be entered and provide a button to reverse the text. The goal was not in any way to represent a real production component, but instead to allow comparison of some simple aspects of components:

- How the component class is declared
- How the component class is entered at the point of use, including passing data into it
- How its template is set up, including how the dynamic data is outputted and how a button is bound to an action
- How the action updates the data in the component

# Angular

Cloned from `quickstart`

To run:

```
cd angular-component
npm install
npm start
```

The component: [message-reverser.component.ts](angular-component/src/app/message-reverser.component.ts)

Using it: 

```html
<message-reverser [message]="'Hello, Angular!'"></message-reverser>
```

Its declaration:

```typescript
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
```

Observations:
- Verbose TypeScript syntax with annotations
- Wiring up imports is verbose as well
- Actual mutation is a simple method declaration and implementation

# Ember

Created by `ember-cli`

To run:

```
npm install -g ember-cli
cd ember-component
npm install
ember serve
```

The component: [message-reverser.js](ember-component/app/components/message-reverser.js) and [message-reverser.hbs](ember-component/app/templates/components/message-reverser.hbs)

Observations:
- Accepts any props; no distinction between props and state
- All you had to implement was template markup and action behavior
- Separation of template and class in different directories is challenging
- Strange getter/setter syntax
- Usage of components doesn't look like HTML

Usage:

```handlebars
{{message-reverser message="Hello, Ember!"}}
```

Definition:

```js
import Ember from 'ember';

export default Ember.Component.extend({
  actions: {
    reverse() {
      let message = this.get('message');
      this.set('message', message.split('').reverse().join(''));
    }
  }
});
```

```handlebars
<div>
  {{input value=message}}
  <button {{action 'reverse'}}>Reverse Message</button>
</div>
```

# React

Created by `create-react-app`

To run:

```
cd react-component
npm install
npm start
```

The component: [Reverser.js](react-component/src/Reverser.js)

Usage:

```jsx
<Reverser message="Hello, React!" />
```

```jsx
import React, { Component } from 'react';

export default class Reverser extends Component {
  constructor(props) {
    super(props);
    this.state = { message: props.message };
  }

  render() {
    let { message } = this.state;
    return <div>
      <input type="text" value={message} onChange={(e) => this.handleChange(e)} />
      <button onClick={() => this.reverse()}>Reverse Message</button>
    </div>
  }

  handleChange(event) {
    this.setState({ message: event.target.value });
  }

  reverse() {
    let { message } = this.state;
    this.setState({
      message: message.split('').reverse().join(''),
    });
  }
}
```

Observations:
- Simple ES6 classes
- Reading data from an input was nontrivial
- Updating state via `setState()`

# Vue

To run: just open `vuejs.html` in a browser.

The component: `Vue.component('reverser')` in [vuejs.html](vue-component/vuejs.html)

Usage:

```html
<reverser message="Hello, Vue.js!"/>
```

Definition:

```js
Vue.component('reverser', {
  props: ['message'],
  data() {
    return {
      mutableMessage: this.message
    }
  },
  methods: {
    reverseMessage() {
      this.mutableMessage = this.mutableMessage.split('').reverse().join('')
    }
  },
  template: `
    <div>
      <input v-model="mutableMessage">
      <button v-on:click="reverseMessage">Reverse Message</button>
    </div>
  `
});
```

Observations:

- Works in a single-page HTML file
- Directives are a little verbose
- Can't use the same name for a prop and data item
- Simple mutation implementation
