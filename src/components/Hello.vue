<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <Discovery></Discovery>
    <Links></Links>
  </div>
</template>

<script>
import Discovery from '@/components/Discovery'
import Links from '@/components/Links'

export default {
  name: 'hello',
  components: {
    Discovery,
    Links
  },
  data () {
    return {
      msg: 'Welcome, including discovery component in Hello component'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}
</style>
