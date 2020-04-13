import * as serviceWorker from './serviceWorker';
import store from './redux/redux-store'
import React from 'react';
import ReactDOM from 'react-dom';
import s from './App.module.css';
import App from './App';
import { BrowserRouter } from 'react-router-dom';

let rerenderEntareTree = (state) => {
    ReactDOM.render(
        <BrowserRouter>
            <App
                data={state}
                dispatch={store.dispatch.bind(store)}
            />
        </BrowserRouter>,
        document.getElementById('root'));
}

rerenderEntareTree(store.getState());
store.subscribe(() => {
    let state = store.getState();
    rerenderEntareTree(state)
});

serviceWorker.unregister();
