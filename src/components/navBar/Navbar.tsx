import React from "react";
import s from "./Navbar.module.css"

export function Navbar() {
    return (
        <div className={s.nav}>
            <div className={s.item}>
href                <a href={'profile'}>Profile</a>
            </div>
            <div className={`${s.item} ${s.active}`}>
                <a href={'message'}>Message</a>
            </div>
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