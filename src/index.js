import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import { makeStore } from './store/store.js'
import { getArtists, getSongs } from './actions/actions.js'
import App from './components/app.js'
import './styles/index.css'

let store = makeStore();

(() => {
  store.dispatch(getArtists())
    .then(() => {
      store.dispatch(getSongs());
    })
})()

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
)
