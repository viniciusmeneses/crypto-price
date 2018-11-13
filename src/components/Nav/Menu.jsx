import React, { Component } from 'react';

import bitcoin from 'cryptocurrency-icons/32/color/btc.png';
import litecoin from 'cryptocurrency-icons/32/color/ltc.png';
import dogecoin from 'cryptocurrency-icons/32/color/doge.png';
import ethereum from 'cryptocurrency-icons/32/color/eth.png';

import CoinItem from './Item/CoinItem';
import './Menu.css';

export default class Menu extends Component {
  state = {
    coinSelected: 'Bitcoin',
    coinList: [
      {
        id: 'BTC',
        name: 'Bitcoin',
        img: bitcoin,
      },
      {
        id: 'LTC',
        name: 'Litecoin',
        img: litecoin,
      },
      {
        id: 'DOGE',
        name: 'Dogecoin',
        img: dogecoin,
      },
      {
        id: 'ETH',
        name: 'Ethereum',
        img: ethereum,
      },
    ],
  };

  newCoinSelected = (name, id) => {
    const { coinSelected } = this.props;

    this.setState({
      coinSelected: name,
    });
    coinSelected(name, id);
  };

  renderCoinsList = () => {
    const { coinList, coinSelected } = this.state;
    return (
      <ul className="coin-list row">
        {coinList.map(coin => (
          <CoinItem
            key={coin.name}
            {...coin}
            selectCoin={this.newCoinSelected}
            isSelected={coinSelected === coin.name}
          />
        ))}
      </ul>
    );
  };

  render() {
    return (
      <nav className="menu mb-4">
        <div className="container-fluid">{this.renderCoinsList()}</div>
      </nav>
    );
  }
}
