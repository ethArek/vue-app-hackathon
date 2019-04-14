export const transactionChartData = {
  type: "line",
  data: {
    labels: [
      "06.04",
      "07.04",
      "08.04",
      "09.04",
      "10.04",
      "11.04",
      "12.04",
      "13.04"
    ],
    datasets: [
      {
        label: "Suma transakcji",
        data: [0, 23.2, 1, 2, 67, 62, 27, 14],
        backgroundColor: ["rgba(71, 183,132,.5)"],
        borderColor: ["#47b784"],
        borderWidth: 3
      },
      {
        label: "Średnia wartośc transakcji",
        data: [0, 11, 1, 2, 67, 46, 27, 5],
        backgroundColor: ["rgba(54,73,93,.5)"],
        borderColor: ["#36495d"],
        borderWidth: 3
      }
    ]
  },
  options: {
    responsive: true,
    lineTension: 1,
    scales: {
      yAxes: [
        {
          ticks: {
            beginAtZero: true,
            padding: 25
          }
        }
      ]
    }
  }
};

export default transactionChartData;
