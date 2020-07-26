import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App.js';
import Navigation from './Navigation.js';

ReactDOM.render(
  <React.StrictMode>
    <App>
      <Navigation />
    </App>
  </React.StrictMode>,
  document.getElementById('root')
);

