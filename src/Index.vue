<template>
  <div id="app">
    <p>欢迎来到vue多页应用</p>
    <p>
      <a href="./views/home/home.html">跳转至home页面</a>
      <a href="./views/setting/setting.html">跳转至设置页面</a>
    </p>
    <img src="@/assets/img/logo.png">
    <HelloWorld/>
  </div>
</template>

<script>
import HelloWorld from '@/components/HelloWorld/HelloWorld'

export default {
  name: 'app',
  components: {
    HelloWorld
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
