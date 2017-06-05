<template>
  <div>
    <h3>{{title}}</h3>
    {{content}}
    <p> My State Count : {{ this.$store.state.count }}</p>
  <p>
    <button @click="increment">+</button>
    <button @click="decrement">-</button>
  </p>

  </div>
</template>
<script>
import { mapActions } from 'vuex'

export default {
  name: 'statevuex',
  methods: {
    ...mapActions([
      'increment', // map `this.increment()` to `this.$store.dispatch('increment')`
      'decrement'  // map `this.decrement()` to `this.$store.dispatch('decrement')`
    ])
  },
  data () {
    return {
      title: 'Test Vuex',
      content: 'Testing Vuex Store at componenet level'
    }
  }
}
</script>
