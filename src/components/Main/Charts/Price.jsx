import React, { Component } from 'react';
import { Line } from 'react-chartjs-2';
import moment from 'moment';

import api from '../../../api';
import currencies from '../../../api/currencies.json';

import './Price.css';

export default class PriceChart extends Component {
  state = {
    coin: {},
    chart: '',
    currency: 'USD',
  };

  componentDidMount() {
    this.loadData();
  }

  componentWillReceiveProps() {
    this.loadData();
  }

  loadData = (newCurrency) => {
    const { currency } = this.state;
    const { coin } = this.props;

    const updatedCurrency = newCurrency || currency;
    this.setState({
      coin,
    });
    this.fetchPrice(coin.id, updatedCurrency);
  };

  updateCurrency = (e) => {
    this.setState({
      currency: e.target.value,
    });
    this.loadData(e.target.value);
  };

  fetchPrice = async (id, currency) => {
    const response = await api.get('histoday', {
      params: {
        fsym: id,
        tsym: currency,
        limit: 15,
      },
    });
    this.renderChart(response.data.Data);
  };

  renderChart = async (coinData) => {
    const chartData = this.buildChartData(coinData);
    const chartOptions = this.buildChartOptions();

    this.setState({
      chart: <Line data={chartData} options={chartOptions} />,
    });
  };

  convertTimestamp = timestamp => moment
    .unix(timestamp)
    .utc()
    .format('DD/MM');

  buildChartData = (coinData) => {
    const { coin } = this.state;

    const days = coinData.map(day => this.convertTimestamp(day.time));
    const prices = coinData.map(price => price.close);

    let chartColor = '';

    switch (coin.id) {
      case 'BTC':
        chartColor = '#F7A745';
        break;
      case 'LTC':
        chartColor = '#D3D3D3';
        break;
      case 'DOGE':
        chartColor = '#D1AC55';
        break;
      case 'ETH':
        chartColor = '#8CA1EF';
        break;
      default:
        chartColor = '#ffffff';
    }

    return {
      labels: [...days],
      datasets: [
        {
          fill: true,
          lineTension: 0.1,
          backgroundColor: `${chartColor}77`,
          borderColor: chartColor,
          borderCapStyle: 'butt',
          borderDashOffset: 0.1,
          borderJoinStyle: 'miter',
          pointBorderColor: chartColor,
          pointBackgroundColor: '#fff',
          pointBorderWidth: 5,
          pointHoverRadius: 5,
          pointHoverBackgroundColor: chartColor,
          pointHoverBorderColor: chartColor,
          pointHoverBorderWidth: 2,
          pointRadius: 1,
          pointHitRadius: 10,
          data: [...prices],
        },
      ],
    };
  };

  buildChartOptions = () => {
    const { currency } = this.state;
    return {
      legend: {
        display: false,
      },
      tooltips: {
        enabled: true,
        mode: 'single',
        callbacks: {
          label(tooltipItems) {
            return `${currency} ${tooltipItems.yLabel}`;
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
              fontColor: '#5e5e5e',
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
              fontColor: '#5e5e5e',
              fontFamily: 'Montserrat',
              padding: 10,
              fontStyle: 500,
              callback: value => `${currencies[currency].symbol} ${value}`,
            },
            gridLines: {
              color: 'rgba(0, 0, 0, 0.05)',
            },
          },
        ],
      },
    };
  };

  render() {
    const { coin, chart } = this.state;
    const arrCurrencies = Object.values(currencies);

    return (
      <section className="price-chart">
        <header className="pb-3 pl-3 pr-sm-2 pr-md-3 pr-1">
          <h2>
            {` ${coin.name} `}
            Price
          </h2>
          <form className="form">
            <select className="form-control form-control-sm" onChange={this.updateCurrency}>
              {arrCurrencies.map(currency => (
                <option key={currency.code} value={currency.code}>
                  {currency.code}
                </option>
              ))}
            </select>
          </form>
        </header>
        <article className="chart">{chart}</article>
      </section>
    );
  }
}
