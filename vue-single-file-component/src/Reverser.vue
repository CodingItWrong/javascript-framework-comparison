<template>
  <div>
    <input v-model="mutableMessage">
    <button v-on:click="reverseMessage">Reverse Message</button>
  </div>
</template>

<script>
  export default {
    name: 'reverser',
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
    }
  }
</script>
