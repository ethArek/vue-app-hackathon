<template>
  <div class="chart">
    <canvas id="planet-chart"></canvas>
  </div>
</template>

<script>
import planetChartData from "./chart-data.js";
import Chart from "chart.js";

export default {
  name: "Chart",
  data() {
    return {
      planetChartData: planetChartData
    };
  },
  methods: {
    createChart(chartId, chartData) {
      const ctx = document.getElementById(chartId);
      const myChart = new Chart(ctx, {
        type: chartData.type,
        data: chartData.data,
        options: chartData.options
      });
    }
  },
  mounted() {
    this.createChart("planet-chart", this.planetChartData);
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped></style>
