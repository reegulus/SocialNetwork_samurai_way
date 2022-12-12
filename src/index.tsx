import React from 'react';
import './index.css';
import ReactDOM from 'react-dom';
import App from './App';
import {store} from "./redux/state";

export const rerenderEntireTree = () => {
    ReactDOM.render(
        <App store={store} state={store.getState()} addPost={store.addPost} updateNewPostText={store.updateNewPostText}/>,
        document.getElementById('root')
    );
}
rerenderEntireTree()
store.subscribe(rerenderEntireTree)
