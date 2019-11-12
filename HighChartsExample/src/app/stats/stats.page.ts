import { Component, OnInit } from '@angular/core';
import { StatsService } from '../shared/stats.service';
import * as Highcharts from 'highcharts';

@Component({
  selector: 'app-stats',
  templateUrl: './stats.page.html',
  styleUrls: ['./stats.page.scss'],
})
export class StatsPage implements OnInit {

  public options: any = {
    chart: {
      type: 'scatter',
      height: 700
    },
    title: {
      text: 'Sample Scatter Plot'
    },
    credits: {
      enabled: false
    },
    tooltip: {
      formatter: function() {
        return 'x: ' + Highcharts.dateFormat('%e %b %y %H:%M:%S', this.x) +' y: ' + this.y.toFixed(2);
      }
    },
    xAxis: {
      type: 'datetime',
      labels: {
        formatter: function() {
          return Highcharts.dateFormat('%e %b %y', this.value);
        }
      }
    },
    series: [
      {
        name: 'Normal',
        turboThreshold: 500000,
        data: [[new Date('2018-01-25 18:38:31').getTime(), 2]]
      },
      {
        name: 'Abnormal',
        turboThreshold: 500000,
        data: [[new Date('2018-02-05 18:38:31').getTime(), 7]]
      }
    ]
  }

  constructor(private statsService:StatsService) { }
pie;
  ngOnInit() {
    this.statsService.countGender()
    

    this.pie= Highcharts.chart('pie', {
      chart: {
        plotBackgroundColor: null,
        plotBorderWidth: 0,
        plotShadow: false
      },
      title: {
        text: 'Genders',
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
        name: 'Different genders in your contacts',
        innerSize: '50%',
        data: [
          ['Males',this.statsService.males],
          ['Females',this.statsService.females],
          
          {
            name: 'Other',
            y: this.statsService.others,
            dataLabels: {
              enabled: false
            }
          }
        ]
      }]
    });

  }
  modifycharts(){
    this.pie.series[0].setData([['Male',4],['Female',13],{
      name: 'Other',
      y: 11.5,
      dataLabels: {
        enabled: false
      }
    }]);
  }


}
