import React from 'react';
import ReactDOM from 'react-dom';
import reducer from '../reducers'
import thunk from 'redux-thunk';
import logger from 'redux-logger'
import { createStore,applyMiddleware,compose } from 'redux'


const middleware = [thunk,logger];
const finalCreateStore = compose(
    applyMiddleware(...middleware)
    )(createStore);

export default finalCreateStore;


