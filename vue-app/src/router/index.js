import Vue from "vue";
import Router from "vue-router";
import Home from "@/components/Home";
import Chart from "@/components/Chart";
import Login from "@/components/Login";
import "bootstrap";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/js/bootstrap.js";
import $ from "jquery";
import Popper from "popper.js";

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: "/",
      component: Home
    },
    {
      path: "/chart",
      component: Chart
    }
  ]
});
