<template>
  <div class="hello">
    <jenkins-menu></jenkins-menu>
  </div>
</template>

<script>
import JenkinsMenu from '@/components/JenkinsMenu'
export default {
  name: 'home',
  components: {
    JenkinsMenu
  },
  data () {
    return {
      msg: 'Welcome to Your Vue.js PWA'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
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
  color: #35495E;
}
</style>
