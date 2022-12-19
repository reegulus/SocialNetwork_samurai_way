import React from 'react';
import './index.css';
import ReactDOM from 'react-dom';
import App from './App';
import {store} from "./redux/state";

export const rerenderEntireTree = () => {
    ReactDOM.render(
        <App store={store}
             state={store.getState()}
             addPost={store._addPost.bind(store)}
             changeNewPostText={store._changeNewPostText.bind(store)}
             dispatch={store.dispatch.bind(store)}
        />,
        document.getElementById('root')
    );
}
rerenderEntireTree()
store.subscribe(rerenderEntireTree)
