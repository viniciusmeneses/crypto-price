import React, { Component } from 'react';
import Menu from './components/Nav/Menu';
import Container from './components/Main/Container';

import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

export default class App extends Component {
  state = {
    coin: {
      name: 'Bitcoin',
      id: 'BTC',
    },
  };

  handleCoinSelect = (name, id) => {
    const { coin } = this.state;
    coin.name = name;
    coin.id = id;

    this.setState({
      coin,
    });
  };

  render() {
    const { coin } = this.state;
    return (
      <div className="app container d-flex flex-column justify-content-center align-items-center p-3">
        <header>
          <h1 className="mb-4 text-center">crypto-price</h1>
        </header>
        <Menu coinSelected={this.handleCoinSelect} />
        <Container coin={coin} />
        <footer>
          <p className="text-center mb-0 mt-3">
            Powered by
            {' '}
            <a className="text-light" href="https://min-api.cryptocompare.com/" target="_blank" rel="noopener noreferrer">
              CryptoCompare API
            </a>
          </p>
        </footer>
      </div>
    );
  }
}
