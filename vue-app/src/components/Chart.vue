<template>
  <div class="chart">
    <div class="card mb-3 w-100">
      <div class="card">
        <div class="card-header">
          Wykres
          <hr />
          <div>
            <div class="dropdown">
              <button
                class="btn btn-secondary dropdown-toggle"
                type="button"
                id="dropdownMenuButton"
                data-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false"
              >
                Dropdown button
              </button>
              <div class="dropdown-menu" aria-labelledby="dropdownMenuButton">
                <a class="dropdown-item" href="#">Action</a>
                <a class="dropdown-item" href="#">Another action</a>
                <a class="dropdown-item" href="#">Something else here</a>
              </div>
            </div>
          </div>
        </div>
        <div class="card-body">
          <canvas id="planet-chart"></canvas>
        </div>
      </div>
    </div>
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
<style scoped>
.chart {
  margin-top: 20px;
}

.card {
  -webkit-box-shadow: 2px 2px 10px -2px rgba(0, 0, 0, 0.75);
  -moz-box-shadow: 2px 2px 10px -2px rgba(0, 0, 0, 0.75);
  box-shadow: 2px 2px 10px -2px rgba(0, 0, 0, 0.75);
}
</style>
