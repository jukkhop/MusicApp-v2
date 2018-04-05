import { createStore, applyMiddleware } from 'redux';
import axios from 'axios';
import axiosMiddleware from 'redux-axios-middleware';
import { rootReducer } from './../reducers/reducers.js';

axios.defaults.baseURL = 'http://localhost:54016/'

export function makeStore() {
  return createStore(
    rootReducer,
    applyMiddleware(axiosMiddleware(axios))
  )
}
