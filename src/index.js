import React from 'react';
import ReactDOM from 'react-dom';
import { makeStore } from './store/store.js';
import App from './components/app.js';
import './styles/index.css';

let store = makeStore();

function render() {
  ReactDOM.render(
    <App store={store} />,
    document.getElementById('root')
  )
}

render();
store.subscribe(render);
