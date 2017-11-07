const Highcharts = require('highcharts');
require('highcharts/modules/exporting')(Highcharts);

export function randomValuesChart1() {
  chart1();
}

async function fetchRandom() {
  let response = await fetch('../random-bar-chart.php');
  return await response.json();
};

async function chart1() {
  const data = await fetchRandom();
  Highcharts.chart('card-1', {
    chart: {
      type: 'bar'
    },
    title: {
      text: 'Fruit Consumption'
    },
    xAxis: {
      categories: ['Apples', 'Bananas', 'Oranges']
    },
    yAxis: {
      title: {
        text: 'Fruit eaten'
      }
    },
    series: [{
      name: 'Jane',
      data: data.jane
    }, {
      name: 'John',
      data: data.john
    }]
  });
};

export default chart1;