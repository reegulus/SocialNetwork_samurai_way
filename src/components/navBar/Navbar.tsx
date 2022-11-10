import React from "react";
import s from "./Navbar.module.css"
import {NavLink} from "react-router-dom";

export function Navbar() {
    return (
        <div className={s.nav}>
            <NavLink to={'profile'} className={s.item}>
                Profile
            </NavLink>
            <NavLink to={"message"} className={`${s.item} ${s.active}`}>
                Message
            </NavLink>
            <NavLink to={'news'} className={s.item}>
               News
            </NavLink>
            <NavLink to={'music'} className={s.item}>
               Music
            </NavLink>
            <NavLink to={'settings'} className={s.item}>
              Settings
            </NavLink>
        </div>
    )
}