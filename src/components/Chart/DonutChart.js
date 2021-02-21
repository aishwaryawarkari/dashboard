import React from "react";
import Highcharts from "highcharts/highstock";
import HighchartsReact from "highcharts-react-official";

const options = {
  chart: {
    renderTo: "container",
    type: "pie",
  },
  title: {
    text: "",
  },
  yAxis: {
    title: {
      text: "Total percent market share",
    },
  },
  credits: {
    enabled: false,
  },
  plotOptions: {
    pie: {
      shadow: false,
    },
  },
  tooltip: {
    formatter: function () {
      return "<b>" + this.point.name + "</b>: " + this.y + " %";
    },
  },
  series: [
    {
      name: "Browsers",
      data: [
        ["Reamining space", 20],
        ["Used space", 40],
        ["", 40],
      ],
      size: "80%",
      innerSize: "65%",
      color: ["green", "red"],
      showInLegend: true,
      dataLabels: {
        enabled: false,
      },
    },
  ],
  colors: ["#ee786c", "#feb95a", "#eee"],
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
