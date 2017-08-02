import React,{Component} from 'react';
import {render} from 'react-dom';
import App from './containers/index';
import './assets/index.less';
import {Provider} from 'react-redux';
import {configureStore} from './store';
let store = configureStore();
render(
    <Provider store={store}>
        <App/>
    </Provider>
   ,window.app
);