import React from 'react';
import { Provider } from 'react-redux';
import { HashRouter, BrowserRouter } from 'react-router-dom';
// import { openModal } from '../actions/modal_actions';

import App from './app';

const Root = ({ store }) => {
    return (
        <Provider store={store}>
            <HashRouter>
                <App />
            </HashRouter>
        </Provider>
    )
};

export default Root;