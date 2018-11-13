import React from 'react';

import PriceChart from './Charts/Price';

import './Status.css';

export default (props) => {
  const { coin } = props;
  return (
    <main className="status container-fluid pt-3 pl-2 pr-3 pb-2">
      <PriceChart coin={coin} />
    </main>
  );
};
