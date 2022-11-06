import React from "react";
import "./NavBar.css"

export function NavBar() {
    return (
        <div className="navBar">
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
        </div>
    )
}