<template>
  <div id="app">
    <Navbar />
    <div class="container">
      <div class="row">
        <div class="col-12">
          <router-view />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Chart from "@/components/Chart";
import Navbar from "@/components/Navbar";
import Home from "@/components/Home";

export default {
  name: "App",
  components: {
    Chart,
    Navbar,
    Home
  }
};
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
