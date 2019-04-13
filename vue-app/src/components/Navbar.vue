<template>
  <div id="app">
    <nav class="navbar navbar-expand-lg navbar-dark bg-primary">
      <button
        class="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarText"
        aria-controls="navbarText"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarText">
        <ul class="navbar-nav mr-auto">
          <li class="nav-item active">
            <router-link to="/">
              <a class="nav-link pt-3 pb-3" href="#">
                Home <span class="sr-only">(current)</span>
              </a>
            </router-link>
          </li>

          <li class="nav-item">
            <router-link to="/chart">
              <a class="nav-link pt-3 pb-3" href="#">Charts</a>
            </router-link>
          </li>

          <li class="nav-item">
            <router-link to="/test">
              <a class="nav-link pt-3 pb-3" href="#">/</a>
            </router-link>
          </li>
        </ul>
      </div>
    </nav>
  </div>
</template>

<script>
export default {
  name: "Navbar",
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
