import React from "react";
import s from "./Navbar.module.css"
import {NavLink} from "react-router-dom";

export function Navbar() {
    return (
        <div className={s.nav}>
            <div className={s.item}>
                <a href={'profile'}>Profile</a>
            </div>
            <NavLink to={"message"} className={`${s.item} ${s.active}`}>
                Message
            </NavLink>
            <div className={s.item}>
                <a href={'news'}>News</a>
            </div>
            <div className={s.item}>
                <a href={'music'}>Music</a>
            </div>
            <div className={s.item}>
                <a href={'settings'}>Settings</a>
            </div>
        </div>
    )
}