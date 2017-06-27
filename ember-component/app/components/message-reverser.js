import Ember from 'ember';

export default Ember.Component.extend({
  actions: {
    reverse() {
      let message = this.get('message');
      this.set('message', message.split('').reverse().join(''));
    }
  }
});
