import React from 'react';

import PriceChart from './Charts/Price';

import './Container.css';

export default (props) => {
  const { coin } = props;
  return (
    <main className="main-container container-fluid pt-3 pl-2 pr-3 pb-2">
      <PriceChart coin={coin} />
    </main>
  );
};
