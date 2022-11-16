import React from "react";
import s from "./DialogItem.module.css";
import {NavLink} from "react-router-dom";

type DialogItemType = {
    id: number
    name: string
}

type DialogItemPropsType = {
    dialogItem: Array<DialogItemType>
}
export function DialogItem(props: DialogItemPropsType) {
    // let path = "/dialogs"
    return (
        <div className={s.dialogs_items}>

            <div className={`${s.dialog} ${s.active}`}>
                {props.dialogItem.map( (el) => {
                    return (
                        <div>
                    <img src="https://img.freepik.com/free-vector/cute-astronaut-ninja-holding-sword-shuriken-cartoon-vector-icon-illustration-science-technology_138676-5263.jpg?w=360" alt=""/> <NavLink activeClassName={s.active} to={`/dialogs ${el.id}`}>{el.name}</NavLink>
                        </div>
                    )
                })}

            </div>

        </div>
    )
}