import React from 'react';
import ReactDOM from 'react-dom';
import Root from './components/root';
import configureStore from './store/store';
import { logout } from './actions/session_actions';


document.addEventListener('DOMContentLoaded', () => {
    const root = document.getElementById('root');

    let store;
    const { currentUser } = window;
    if (window.currentUser) {
        const preloadedState = {
            session: { id: currentUser.id },
            entities: {
                users: { [currentUser.id]: currentUser }
            }
        };
        store = configureStore(preloadedState);
        delete window.currentUser;
    } else {
        store = configureStore();
    }
    window.dispatch = store.dispatch;
    window.logout = logout;
    window.store = store;

    
    ReactDOM.render(<Root store={store} />, root);
});