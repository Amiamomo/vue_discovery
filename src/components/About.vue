<template>
  <div>
    <h1>{{title}}</h1>
    {{content}}
  </div>
</template>
<script>
export default {
  name: 'about',
  data () {
    return {
      title: 'About',
      content: 'Discovery of Javascript ecosystem - today Vue & Vuex'
    }
  }
}
</script>
