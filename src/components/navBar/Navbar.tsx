import React from "react";
import s from "./Navbar.module.css"
import {NavLink} from "react-router-dom";

export function Navbar() {
    return (
        <nav className={s.nav}>
            <ul>
                <li className={s.item}>
                    <NavLink activeClassName={s.active} to={'profile'}>
                        Profile
                    </NavLink>
                </li>
                <li className={`${s.item} ${s.active}`}>
                    <NavLink activeClassName={s.active} to={"dialogs"}>
                        Message
                    </NavLink>
                </li>
                <li className={s.item}>
                    <NavLink activeClassName={s.active} to={'news'}>
                        News
                    </NavLink>
                </li>
                <li className={s.item}>
                    <NavLink activeClassName={s.active} to={'music'}>
                        Music
                    </NavLink>
                </li>
                <li className={s.item}>
                    <NavLink activeClassName={s.active} to={'settings'}>
                        Settings
                    </NavLink>
                </li>
            </ul>
        </nav>
    )
}