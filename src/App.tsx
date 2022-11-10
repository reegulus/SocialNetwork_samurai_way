import React from 'react';
import './App.css';
import {Header} from "./components/header/Header";
import {Navbar} from "./components/navBar/Navbar";
import {Profile} from "./components/profile/Profile";
import {Dialogs} from "./components/dialogs/Dialogs";
import {Route} from "react-router-dom";

function App() {
    return (

        <div className="App">
            <Header/>
            <Navbar/>
            <div className={"content"}>
                <Route  path={'/profile'} component={Profile}/>
                <Route path={'/dialogs'} component={Dialogs}/>
            </div>
        </div>
    );
}

export default App;
