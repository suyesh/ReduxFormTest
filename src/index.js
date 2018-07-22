import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import { BrowserRouter } from 'react-router-dom'
import promiseMiddleware from 'redux-promise';

import './style/main.css';
import registerServiceWorker from './registerServiceWorker';
import reducers from './reducers'
import AppRoutes from './Routes'

const createStoreWithMiddleware = applyMiddleware(promiseMiddleware)(createStore)

ReactDOM.render(
  <Provider store={createStoreWithMiddleware(reducers)}>
    <BrowserRouter>
      <AppRoutes/>
    </BrowserRouter>
  </Provider>,
  document.getElementById('root'));
registerServiceWorker();
