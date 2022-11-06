import React from 'react';
import './App.css';

function App() {
    return (
        <div className="App">
            <header className="header">
                <img src="https://files.codingninjas.com/profile98225580ab82cdabc7b221549564635ee6b84c.png" alt="img"/>
                <img
                    src="https://res.cloudinary.com/practicaldev/image/fetch/s--xqQ332cg--/c_limit%2Cf_auto%2Cfl_progressive%2Cq_auto%2Cw_880/https://dev-to-uploads.s3.amazonaws.com/i/ltnifh5z7pkeeb2jzt5p.png"
                    alt="img"/>
            </header>
            <nav className="navBar">
                <div>
                    <a href="">Profile</a>
                </div>
                <div>
                    <a href="">Message</a>
                </div>
                <div>
                    <a href="">News</a>
                </div>
                <div>
                    <a href="">Music</a>
                </div>
                <div>
                    <a href="">Settings</a>
                </div>

            </nav>
            <div className="content">
                <div>
                    <img
                        src="https://commercialisation.esa.int/wp-content/uploads/2021/11/earth-g1f2e40a34_1280-1280x400.jpg"
                        alt="img"/>
                </div>
                <div>
                    Ava + description
                </div>
                <div>
                    My Post
                    <div>
                        New post
                    </div>
                    <div>
                        Post 1
                    </div>
                    <div>
                        Post 2
                    </div>
                    <div>
                        Post 3
                    </div>
                </div>
            </div>
        </div>
    );
}

export default App;
