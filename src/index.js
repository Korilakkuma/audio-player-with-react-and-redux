import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import App from './App';
import reducers from './reducers';

document.addEventListener('DOMContentLoaded', () => {

    ReactDOM.render(
        <Provider store={ createStore(reducers) }>
            <App />
        </Provider>,
        document.getElementById('audio-player-container')
    );

}, true);