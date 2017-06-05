<template>
  <div>
    <h2>{{title}}</h2>
    {{content}}
  <h3> testing state value (from State Vuex)</h3>
   <p> My State Count : {{ this.$store.state.count }}</p>
   <h3> render an element multiple times based on source data (v-for)</h3>
    <ul>
        <li v-for="user in users">
          {{user.firstname}} {{user.lastname}}
        </li>
    </ul>
    <h3> Testing Two way bindings (v-model)</h3>
       <font size=3>input_val={{input_val}}</font>
    <div>
      <input type="text" v-model="input_val">
    </div> 
    <h3> Testing Two way bindings (v-text) same as {{}}</h3>
      Input Value: <span v-text="input_val"></span>
    <h3> Testing Two way bindings ( v-on:click)</h3>
      <div>
        <button class="btn btn-primary" v-on:click="counter++">You've clicked this button {{counter}} times!</button>
      </div>
  </div>
</template>
<script>
export default {
  name: 'discovery',
  data () {
    return {
      title: 'Discovery',
      content: 'Discovery of Javascript ecosystem - today Vue & Vuex',
      users: [
        {firstname: 'Sebastian', lastname: 'Eschweiler'},
        {firstname: 'Bill', lastname: 'Smith'},
        {firstname: 'John', lastname: 'Porter'}
      ],
      msg: 'Welcome to My  Vue.js App',
      input_val: '',
      counter: 0
    }
  }
}
</script>
