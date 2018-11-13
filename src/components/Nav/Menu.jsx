import React from 'react';

import bitcoin from 'cryptocurrency-icons/32/color/btc.png';
import litecoin from 'cryptocurrency-icons/32/color/ltc.png';
import dogecoin from 'cryptocurrency-icons/32/color/doge.png';
import ethereum from 'cryptocurrency-icons/32/color/eth.png';

import CoinItem from './Item/CoinItem';
import './Menu.css';

export default () => (
  <nav className="menu mb-4">
    <div className="container-fluid">
      <ul className="coin-list row">
        <CoinItem coin="Bitcoin" img={bitcoin} />
        <CoinItem coin="Litecoin" img={litecoin} />
        <CoinItem coin="Dogecoin" img={dogecoin} />
        <CoinItem coin="Ethereum" img={ethereum} />
      </ul>
    </div>
  </nav>
);
