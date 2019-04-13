import Vue from "vue";
import Router from "vue-router";
import HelloWorld from "@/components/HelloWorld";
import Chart from "@/components/Chart";

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: "/bla",
      name: "HelloWorld",
      component: HelloWorld
    },
    {
      path: "/",
      name: "Chart",
      component: Chart
    }
  ]
});
