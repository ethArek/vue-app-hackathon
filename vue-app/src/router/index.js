import Vue from "vue";
import Router from "vue-router";
import Home from "@/components/Home";
import Chart from "@/components/Chart";
import Login from "@/components/Login";
import Test from "@/components/Test";

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: "/",
      component: Home
    },
    {
      path: "/test",
      component: Test
    },
    {
      path: "/chart",
      component: Chart
    }
  ]
});
