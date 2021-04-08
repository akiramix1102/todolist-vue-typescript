<template>
  <div id="app">
    <div id="nav">
      <div class="title">
        <span>To Do List</span>
      </div>
      <router-view />
    </div>
  </div>
</template>

<style lang="scss" scoped>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}

#nav {
  padding: 30px;
  width: 540px;
  margin: 0 auto;

  .title {
    font-size: 24px;
    text-align: center;
    color: #fff;
    font-weight: bold;
    margin-bottom: 20px;
    background: #bc4e9c; /* fallback for old browsers */
    background: -webkit-linear-gradient(
      to right,
      #f80759,
      #bc4e9c
    ); /* Chrome 10-25, Safari 5.1-6 */
    background: linear-gradient(
      to right,
      #f80759,
      #bc4e9c
    ); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */

    padding: 20px 0;
  }

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
