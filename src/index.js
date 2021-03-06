import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';

import './styles/main.css';
import '../node_modules/font-awesome/css/font-awesome.min.css'; 
import App from './containers/App';
import registerServiceWorker from './registerServiceWorker';
import store from './store/store';

ReactDOM.render(
  <Provider store={store} >
    <App />
  </Provider>,
  document.getElementById('root')
);

registerServiceWorker();
