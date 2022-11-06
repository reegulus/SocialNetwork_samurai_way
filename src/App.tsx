import React from 'react';
import './App.css';

function App() {
    return (
        <div className="App">
            <header className = "header">
                <img src="https://avatars.githubusercontent.com/u/19506676?v=4" alt="img"/>
            </header>
            <nav className= "navBar">
                <div>Profile</div>
                <div>Message</div>
            </nav>
            <div className = "content">
                Main content
            </div>
        </div>
    );
}

export default App;
