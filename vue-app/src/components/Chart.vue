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
                Wybierz interwał czasu
              </button>
              <div class="dropdown-menu" aria-labelledby="dropdownMenuButton">
                <a class="dropdown-item" href="#">Tydzień</a>
                <a class="dropdown-item" href="#">Miesiąc</a>
                <a class="dropdown-item" href="#">3 miesiące</a>
              </div>
            </div>
          </div>
        </div>
        <nav>
          <div class="nav nav-tabs border-0 mt-4" id="nav-tab" role="tablist">
            <a
              class="nav-item nav-item-edit nav-link active ml-4"
              id="nav-tab-0"
              data-toggle="tab"
              href="#chart0"
              role="tab"
              aria-controls="nav-home"
              aria-selected="true"
              >Wykres transakcji</a
            >
            <a
              class="nav-item nav-item-edit nav-link"
              id="nav-tab-1"
              data-toggle="tab"
              href="#chart0"
              role="tab"
              aria-controls="nav-home"
              aria-selected="true"
              >Wykres 2</a
            >
            <a
              class="nav-item nav-item-edit nav-link"
              id="nav-tab-1"
              data-toggle="tab"
              href="#chart0"
              role="tab"
              aria-controls="nav-home"
              aria-selected="true"
              >Wykres 3</a
            >
            <a
              class="nav-item nav-item-edit nav-link"
              id="nav-tab-1"
              data-toggle="tab"
              href="#chart0"
              role="tab"
              aria-controls="nav-home"
              aria-selected="true"
              >Wykres 4</a
            >
          </div>
        </nav>
        <div class="card-body">
          <canvas id="transactionChart"></canvas>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import transactionChartData from "./chart-data.js";
import Chart from "chart.js";
import Vue from "vue";

export default {
  name: "Chart",
  data() {
    return {
      transactionChartData: transactionChartData
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
    Vue.axios.get("https://dog.ceo/api/breeds/image/random").then(response => {
      //I tutaj w response będziesz miał to co zwróciłeś z API.
      //console.log wypisuje co zwrociles (ctrl + shift + c żeby otworzyc konsole w przegladarce)
      // w tym przykladzie zwraca linka do zdjecia jakiegos psa xd
      // Ale jak uruchomisz u siebie server na localhoscie to tez przejdzie
      console.log(response);

      //teraz chodzi o to, zeby te dane ktore zwrociles dac do wykresu
      //czyli jak będzie 1 wykres to
      //do this.transactionChartData.data.datasets[0] (obczaj sobie plik chart-data.js)

      //a this.transactionChartData.data.datasets[1] se możesz usunąć
      //this.transactionChartData.data.datasets[1] = null;

      this.createChart("transactionChart", this.transactionChartData);
    });
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.chart {
  margin-top: 20px;
}

.dropdown-item {
  width: 208px;
}

.active {
  background-color: #f5f5f5 !important;
}

.card {
  -webkit-box-shadow: 2px 2px 10px -2px rgba(0, 0, 0, 0.75);
  -moz-box-shadow: 2px 2px 10px -2px rgba(0, 0, 0, 0.75);
  box-shadow: 2px 2px 10px -2px rgba(0, 0, 0, 0.75);
}
</style>
