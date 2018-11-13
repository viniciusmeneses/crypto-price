import React, { Component } from 'react';
import { Line } from 'react-chartjs-2';

import './Price.css';

export default class PriceChart extends Component {
  data = () => ({
    labels: ['11/06', '11/07', '11/08', '11/09', '11/10', '11/11'],
    datasets: [
      {
        fill: true,
        lineTension: 0.1,
        backgroundColor: '#ffa931aa',
        borderColor: '#ff9400',
        borderCapStyle: 'butt',
        borderDash: [],
        borderDashOffset: 0.1,
        borderJoinStyle: 'miter',
        pointBorderColor: '#ff9400',
        pointBackgroundColor: '#fff',
        pointBorderWidth: 5,
        pointHoverRadius: 5,
        pointHoverBackgroundColor: '#ff9400',
        pointHoverBorderColor: '#ff9400',
        pointHoverBorderWidth: 2,
        pointRadius: 1,
        pointHitRadius: 10,
        data: [7300.43, 6735.12, 6842.2, 6902.79, 6992.0, 8032.0],
      },
    ],
  });

  options = () => ({
    legend: {
      display: false,
    },
    tooltips: {
      enabled: true,
      mode: 'single',
      callbacks: {
        label(tooltipItems) {
          return `USD ${tooltipItems.yLabel}`;
        },
      },
    },
    maintainAspectRatio: false,
    layout: {
      padding: 5,
    },
    scales: {
      xAxes: [
        {
          ticks: {
            fontColor: '#515151',
            fontFamily: 'Montserrat',
            fontStyle: 500,
            padding: 10,
          },
          gridLines: {
            color: 'rgba(0, 0, 0, 0.05)',
          },
        },
      ],
      yAxes: [
        {
          ticks: {
            fontColor: '#515151',
            fontFamily: 'Montserrat',
            padding: 10,
            fontStyle: 500,
            callback: value => `$ ${value}`,
          },
          gridLines: {
            color: 'rgba(0, 0, 0, 0.05)',
          },
        },
      ],
    },
  });

  render() {
    return (
      <section className="price-chart">
        <header>
          <h2>Current Bitcoin Price</h2>
          <form className="form">
            <select className="form-control form-control-sm">
              <option>USD</option>
              <option>BRL</option>
            </select>
          </form>
        </header>
        <article className="chart">
          <Line data={this.data} options={this.options()} />
        </article>
      </section>
    );
  }
}
