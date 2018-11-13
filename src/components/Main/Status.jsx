import React from 'react';

import PriceChart from './Charts/Price';

import './Status.css';

export default (props) => {
  const { coin } = props;
  return (
    <main className="status container-fluid p-3">
      <PriceChart coin={coin} />
    </main>
  );
};
