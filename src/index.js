import React from 'react';
import ReactDOM from 'react-dom';
import './styles/main.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import store from './store/store';

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
