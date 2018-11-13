import React from 'react';
import './CoinItem.css';

export default (props) => {
  const {
    name, img, selectCoin, isSelected, id,
  } = props;
  return (
    <li className={`coin-item col-6 col-sm-3 ${isSelected ? 'active' : ''}`}>
      <div onClick={() => selectCoin(name, id)} onKeyDown={() => {}} role="button" tabIndex={0}>
        <img src={img} alt={name} />
        <span>{name}</span>
      </div>
    </li>
  );
};
