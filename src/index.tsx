import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import App from './App';
import { store } from './global/store';

import 'core-js';
import 'regenerator-runtime/runtime';
import 'custom-event-polyfill';

// const arr = Array.from([1, 2, 3, 4, 5]);
// console.log('Array from function: ', arr);

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root'),
);
