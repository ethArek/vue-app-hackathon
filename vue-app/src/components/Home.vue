<template>
  <div id="app">
    <div class="jumbotron">
      <h1 class="display-4"></h1>
      <p class="lead">
        Login:
        <input />
      </p>
      <hr class="my-4" />
      <p class="lead">
        Password:
        <input />
      </p>
      <a class="btn btn-primary btn-lg" href="#" role="button">Learn more</a>
    </div>
  </div>
</template>

<script>
export default {
  name: "Index",
  data() {
    return {
      message: ""
    };
  },
  methods: {}
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped></style>
