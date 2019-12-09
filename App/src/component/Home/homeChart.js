import React, { Component } from 'react';
import {View} from 'react-native';
import * as am4core from "@amcharts/amcharts4/core";
import * as am4charts from "@amcharts/amcharts4/charts";
import am4themes_animated from "@amcharts/amcharts4/themes/animated";

am4core.useTheme(am4themes_animated);

class Chart extends Component {
  constructor(props) {
    super(props)
    this.state = {
       data:[]
    }
  }
  componentDidMount() {
    let chart = am4core.create("chartdiv", am4charts.XYChart);
    chart.paddingRight = 20;

    let value1 = 10;
    let value2 = 15;
    let value3 = 20;
    for (let i = 1; i < 366; i++) {
      value1 += Math.round((Math.random() < 0.5 ? 1 : -1) * Math.random() * 10);
      value2 += Math.round((Math.random() < 0.5 ? 1 : -1) * Math.random() * 10);
      value3 += Math.round((Math.random() < 0.5 ? 1 : -1) * Math.random() * 10);
      this.state.data.push({ date: new Date(2019, 0, i), value1: value1, value2: value2 , value3: value3  });
    }

    chart.data = this.state.data;
    let dateAxis = chart.xAxes.push(new am4charts.DateAxis());
    dateAxis.renderer.grid.template.location = 0;
    dateAxis.renderer.minGridDistance = 50;

    let valueAxis = chart.yAxes.push(new am4charts.ValueAxis());
    valueAxis.tooltip.disabled = true;
    valueAxis.renderer.minWidth = 45;
    //valueAxis.title.text = "Temperature";

    // Create series 1
    let series1 = chart.series.push(new am4charts.LineSeries());
    series1.dataFields.dateX = "date";
    series1.dataFields.valueY = "value1";
    series1.numberFormatter.numberFormat = "#.";
    series1.tensionX = 0.8;
    series1.strokeWidth = 2.5;
    series1.name = "Bon Chiet";
    series1.fill = chart.colors.getIndex(0);
    series1.tooltip.pointerOrientation = "vertical";
    series1.tooltip.background.cornerRadius = 20;
    series1.tooltip.background.fillOpacity = 0.5;
    series1.tooltip.label.padding(12,12,12,12)
    series1.tooltipText = "{valueY.value}";

        // Create series 2
    let series2 = chart.series.push(new am4charts.LineSeries());
    series2.dataFields.dateX = "date";
    series2.dataFields.valueY = "value2";
    series2.tensionX = 0.8;
    series2.strokeWidth = 2.5;
    series2.name = "Bon Co So Cap";
    series2.tooltip.pointerOrientation = "vertical";
    series2.tooltip.background.cornerRadius = 20;
    series2.tooltip.background.fillOpacity = 0.5;
    series2.tooltip.label.padding(12,12,12,12)
    series2.tooltipText = "{valueY.value}";
    // Create series 2
    let series3 = chart.series.push(new am4charts.LineSeries());
    series3.dataFields.dateX = "date";
    series3.dataFields.valueY = "value3";
    series3.tensionX = 0.8;
    series3.strokeWidth = 2.5;
    series3.name = "Bon Co Thu Cap";
    series3.tooltip.pointerOrientation = "vertical";
    series3.tooltip.background.cornerRadius = 20;
    series3.tooltip.background.fillOpacity = 0.5;
    series3.tooltip.label.padding(12,12,12,12)
    series3.tooltipText = "{valueY.value}";
    series3.stacked = true;
    
    // Add cursor
    chart.cursor = new am4charts.XYCursor();

    // Add legend
    chart.legend = new am4charts.Legend();
    chart.legend.position = "top";

    
    //let scrollbarX = new am4charts.XYChartScrollbar();
    //scrollbarX.series.push(series);
    //chart.scrollbarX = scrollbarX;
    //chart.scrollbarX.parent = chart.bottomAxesContainer;

    this.chart = chart;
  }

  componentWillUnmount() {
    if (this.chart) {
      this.chart.dispose();
    }
  }

  render() {
    return (
      <View id="chartdiv" style={{ width: "100%", height: "80px" }}></View>
    );
  }
}

export default Chart;