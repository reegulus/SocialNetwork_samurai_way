import React from 'react';
import './App.css';
import {Header} from "./components/header/Header";
import {Navbar} from "./components/navBar/Navbar";
import {Profile} from "./components/profile/Profile";
import {Dialogs} from "./components/dialogs/Dialogs";
import {RootStateType} from "./redux/state";
import {BrowserRouter, Route} from "react-router-dom";

type AppPropsType = {
    state: RootStateType
    addPost: (postText: string) => void
    updateNewPostText: (newText: string) => void
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
                               updateNewPostText={props.updateNewPostText}
                               profilePage={profilePage}
                               addPost={props.addPost}/>}/>
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

