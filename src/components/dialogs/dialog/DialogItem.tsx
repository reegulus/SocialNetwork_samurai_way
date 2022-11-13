import React from "react";
import s from "./DialogItem.module.css";
import {NavLink} from "react-router-dom";

type DialogItemPropsType = {
    name: string
    id: number
}
export function DialogItem(props: DialogItemPropsType) {
    let path = "/dialogs" + props.id
    return (
        <div className={s.dialogs_items}>
            <div className={`${s.dialog} ${s.active}`}>
                <img src="https://img.freepik.com/free-vector/cute-astronaut-ninja-holding-sword-shuriken-cartoon-vector-icon-illustration-science-technology_138676-5263.jpg?w=360" alt=""/> <NavLink activeClassName={s.active} to={path}>{props.name}</NavLink>
            </div>

        </div>
    )
}