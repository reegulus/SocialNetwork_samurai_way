import React from 'react';
import './App.css';
import {Header} from "./components/header/Header";
import {Navbar} from "./components/navBar/Navbar";
import {Profile} from "./components/profile/Profile";
import {Dialogs} from "./components/dialogs/Dialogs";

function App() {
    return (
        <div className="App">
            <Header/>
            <Navbar/>
            <div>
                <Dialogs/>
            <Profile/>
            </div>
        </div>
    );
}

export default App;
