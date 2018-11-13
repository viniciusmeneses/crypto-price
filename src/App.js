import React from 'react';
import Menu from './components/Nav/Menu';
import Status from './components/Main/Status';

import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

export default () => (
  <div className="app container d-flex flex-column justify-content-center align-items-center p-3">
    <header>
      <h1 className="mb-4">crypto-status</h1>
    </header>
    <Menu />
    <Status />
  </div>
);
