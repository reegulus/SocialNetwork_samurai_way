import React from "react";
import s from "./Header.module.css"
import code_samurai from "../../img/code_samurai_logo.png"

export function Header () {
    return (
        <div className={s.header}>
            <img src={code_samurai} alt="logo"/>
        </div>
    )
}
