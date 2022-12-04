import React from 'react';
import './App.css';
import {Header} from "./components/header/Header";
import {Navbar} from "./components/navBar/Navbar";
import {Profile} from "./components/profile/Profile";
import {Dialogs} from "./components/dialogs/Dialogs";
import {RootStateType} from "./redux/state";
import {Route} from "react-router-dom";

type AppPropsType = {
    state: RootStateType
}

function App(props: AppPropsType) {
    const profilePage = props.state.profilePage
    const dialogsPage = props.state.dialogsPage
    return (
            <div className="App">
                <Header/>
                <Navbar/>
                <div className={"content"}>
                    <Route exact path={'/profile'}
                           render={() => <Profile
                               profilePage={profilePage}/>
                           }/>
                    <Route exact path={'/dialogs'}
                           render={() => <Dialogs
                               dialogsPage={dialogsPage}/>
                           }/>
                </div>
            </div>
    );
}

export default App;
