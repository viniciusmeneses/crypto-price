import React from 'react';
import './CoinItem.css';

export default (props) => {
  const { coin, img } = props;
  return (
    <li className="coin-item col-6 col-sm-3">
      <img src={img} alt={coin} />
      <span>{coin}</span>
    </li>
  );
};
