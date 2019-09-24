<template>
  <main>
    <list >
      <li>Some content</li>
      <li>Some More Content</li>
    </list>
  </main>
</template>

<script>
import List from './components/list'

export default {
  name: 'app',
  components: {
   List
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
