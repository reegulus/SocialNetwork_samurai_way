import React from 'react';
import './App.css';
import {Header} from "./components/header/Header";
import {Navbar} from "./components/navBar/Navbar";
import {Profile} from "./components/profile/Profile";
import {Dialogs} from "./components/dialogs/Dialogs";
import {ActionsTypes, RootStateType, StoreType} from "./redux/state";
import {BrowserRouter, Route} from "react-router-dom";

type AppPropsType = {
    store: StoreType
    state: RootStateType
    addPost: (postText: string) => void
    changeNewPostText: (newText: string) => void
    dispatch: (action: ActionsTypes) => void
}

function App(props: AppPropsType) {
    const profilePage = props.state.profilePage
    const dialogsPage = props.state.dialogsPage
    return (
        <BrowserRouter>
            <div className="App">
                <Header/>
                <Navbar/>
                <div className={"content"}>
                    <Route exact path={'/profile'}
                           render={() => <Profile
                               changeNewPostText={props.store._changeNewPostText}
                               profilePage={profilePage}
                               dispatch={props.dispatch}
                               addPost={props.store._addPost}/>}/>
                    <Route exact path={'/dialogs'}
                           render={() => <Dialogs
                               dialogsPage={dialogsPage}/>
                           }/>
                </div>
            </div>
        </BrowserRouter>
    );
}

export default App;

