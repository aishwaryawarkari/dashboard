import React from "react";
import Highcharts from "highcharts/highstock";
import HighchartsReact from "highcharts-react-official";

const options = {
  chart: {
    type: "column",
  },
  title: {
    text: "Data Used",
  },
  subtitle: {
    text: "",
  },
  xAxis: {
    categories: ["mon", "tue", "wed", "thu", "fri", "sat", "sun"],
    crosshair: true,
  },
  credits: {
    enabled: false,
  },
  yAxis: {
    min: 0,
    title: {
      text: "Data",
    },
  },
  tooltip: {
    headerFormat: '<span style="font-size:10px">{point.key}</span><table>',
    pointFormat:
      '<tr><td style="color:{series.color};padding:0">{series.name}: </td>' +
      '<td style="padding:0"><b>{point.y:.1f} GB</b></td></tr>',
    footerFormat: "</table>",
    shared: true,
    useHTML: true,
  },
  plotOptions: {
    column: {
      pointPadding: 0.2,
      borderWidth: 0,
    },
  },
  series: [
    {
      name: "Tokyo",
      data: [49.9, 71.5, 106.4, 129.2, 144.0, 176.0, 135.6],
    },
    {
      name: "New York",
      data: [83.6, 78.8, 98.5, 93.4, 106.0, 84.5, 105.0],
    },
    {
      name: "London",
      data: [48.9, 38.8, 39.3, 41.4, 47.0, 48.3, 59.0],
    },
  ],
  colors: ["#fbb15c", "#2a9890", "#754deb"],
};

const MyBarChart = () => (
  <HighchartsReact
    highcharts={Highcharts}
    // constructorType={'stockChart'}
    allowChartUpdate={true}
    options={options}
  />
);

export default MyBarChart;
