<template>
  <div id="app">
    <p>这是Sub页面</p>
    <p><a href="./subsub/subsub.html">跳转至二级子页面</a></p>
  </div>
</template>

<script>
  export default {
    name: 'app',
    components: {
    },
    data (){
      return {}
    },
    created() {
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
