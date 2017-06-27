# JavaScript Framework Comparison

Shows how to build a trivial component in each framework to compare.

# Angular

Cloned from `quickstart`

To run:

```
cd angular-component
npm install
npm start
```

The component: [message-reverser.component.ts](angular-component/src/app/message-reverser.component.ts)

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

# React

Created by `create-react-app`

To run:

```
cd react-component
npm install
npm start
```

The component: [Reverser.js](react-component/src/Reverser.js)

Observations:
- Simple ES6 classes
- Reading data from an input was nontrivial
- Updating state via `setState()`

# Vue

To run: just open `vuejs.html` in a browser.

The component: `Vue.component('reverser')` in [vuejs.html](vue-component/vuejs.html)

Observations:

- Works in a single-page HTML file
- Directives are a little verbose
- Can't use the same name for a prop and data item
- Simple mutation implementation
