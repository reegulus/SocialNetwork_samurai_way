import React from 'react';
import './index.css';
import ReactDOM from 'react-dom';
import App from './App';
import {addPost, state, subscribe, updateNewPostText} from "./redux/state";

export const rerenderEntireTree = () => {
    ReactDOM.render(
        <App state={state} addPost={addPost} updateNewPostText={updateNewPostText}/>,
        document.getElementById('root')
    );
}
rerenderEntireTree()
subscribe(rerenderEntireTree)
