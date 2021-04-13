<template>
  <div class="container">
    <div class="row">
      <div class="col-12">
        <h1>Built-in Directives</h1>
        <p v-text=" 'Some text' "></p>
        <p v-html=" '<strong>Some strong text</strong>' "></p>
      </div>
    </div>

    <div class="row mt-5">
      <div class="col-12">
        <h1>Custom Directives</h1>
        <p v-highlight:background="'green'">Color this</p>
      </div>
    </div>
  </div>
</template>

<script>

export default {
  name: 'App',
  
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
