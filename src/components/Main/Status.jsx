import React, { Component } from 'react';

import PriceChart from './Charts/Price';

import './Status.css';

export default class Status extends Component {
  render() {
    return (
      <main className="status container-fluid p-3">
        <PriceChart />
      </main>
    );
  }
}
