import React from "react";
import s from "../Dialogs.module.css";
import {NavLink} from "react-router-dom";

export function Dialog() {
    return (
        <div className={s.dialogs_items}>
            <div className={`${s.dialog} ${s.active} `}>
                <NavLink activeClassName={s.active} to={"/dialogs/1"}> Peter Quill</NavLink>
            </div>
            <div className={s.dialog + ' ' + s.active}>
                <NavLink activeClassName={s.active} to={"/dialogs/2"}>Gamora</NavLink>
            </div>
            <div className={s.dialog}>
                <NavLink activeClassName={s.active} to={"/dialogs/3"}>Groot</NavLink>
            </div>
            <div className={s.dialog}>
                <NavLink activeClassName={s.active} to={"/dialogs/4"}>Drax Destroyer</NavLink>
            </div>
            <div className={s.dialog}>
                <NavLink activeClassName={s.active} to={"/dialogs/5"}>Raccoon Rocket</NavLink>
            </div>
        </div>
    )
}