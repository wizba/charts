import { Component } from '@angular/core';

import * as Highcharts from 'highcharts';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  chartsName:string='chartId';
  constructor() {}

  ionViewDidEnter() {
    this.plotSimpleBarChart();
  }

  plotSimpleBarChart() {
    let the = Highcharts.chart('highcharts', {
      chart: {
        type: 'bar'
      },
      title: {
        text: 'Chart Title'//charts title
      },
      xAxis: {
        categories: ['Apples', 'Bananas', 'Oranges']
      },
      yAxis: {
        title: {
          text: 'Fruit eaten'
        }
      },
      series: [
        {
          name: "jane",
          type: undefined,
          data: [1, 0, 4]
        },
        {
          name: "John",
          type: undefined,
          data: [5, 7, 3]
        }]
    });
    let myChart=Highcharts.chart(this.chartsName, {
      chart: {
          type: 'areaspline'
      },
      title: {
          text: 'Average fruit consumption during one week'
      },
      legend: {
          layout: 'vertical',
          align: 'left',
          verticalAlign: 'top',
          x: 150,
          y: 100,
          floating: true,
          borderWidth: 1,
          backgroundColor:
              Highcharts.defaultOptions.legend.backgroundColor || '#FFFFFF'
      },
      xAxis: {
          categories: [
              'Monday',
              'Tuesday',
              'Wednesday',
              'Thursday',
              'Friday',
              'Saturday',
              'Sunday'
          ],
          plotBands: [{ // visualize the weekend
              from: 4.5,
              to: 6.5,
              color: 'rgba(68, 170, 213, .2)'
          }]
      },
      yAxis: {
          title: {
              text: 'Fruit units'
          }
      },
      tooltip: {
          shared: true,
          valueSuffix: ' units'
      },
      credits: {
          enabled: false
      },
      plotOptions: {
          areaspline: {
              fillOpacity: 0.5
          }
      },
      series: [{
          name: "John",
          data: [3, 4, 3, 5, 4, 10, 12]
      }, {
          name: "Jane",
          data: [1, 3, 4, 3, 3, 5, 4]
      }]
  });
  Highcharts.chart('myContainer', {
    chart: {
      plotBackgroundColor: null,
      plotBorderWidth: 0,
      plotShadow: false
    },
    title: {
      text: 'Browser<br>shares<br>2017',
      align: 'center',
      verticalAlign: 'middle',
      y: 60
    },
    tooltip: {
      pointFormat: '{series.name}: <b>{point.percentage:.1f}%</b>'
    },
    plotOptions: {
      pie: {
        dataLabels: {
          enabled: true,
          distance: -50,
          style: {
            fontWeight: 'bold',
            color: 'white'
          }
        },
        startAngle: -90,
        endAngle: 90,
        center: ['50%', '75%'],
        size: '110%'
      }
    },
    series: [{
      type: 'pie',
      name: 'Browser share',
      innerSize: '50%',
      data: [
        ['Chrome', 58.9],
        ['Firefox', 13.29],
        ['Internet Explorer', 13],
        ['Edge', 3.78],
        ['Safari', 3.42],
        {
          name: 'Other',
          y: 7.61,
          dataLabels: {
            enabled: false
          }
        }
      ]
    }]
  });
  
  }

  generatePiechat(){
    
  }
}
