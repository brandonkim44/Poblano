import React from 'react';
import ReactDOM from 'react-dom';
import Root from './components/root';
import configureStore from './store/store';


document.addEventListener('DOMContentLoaded', () => {
    const root = document.getElementById('root');

    let store;
    const { currentUser } = window;
    if (window.currentUser) {
        const preloadedState = {
            entities: {
                users: { [currentUser.id]: currentUser }
            },
            session: { id: currentUser.id }
        };
        store = configureStore(preloadedState);
        delete window.currentUser;
    } else {
        store = configureStore();
    }
    
    ReactDOM.render(<Root store={store} />, root);
});