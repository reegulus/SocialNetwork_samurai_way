import React from "react";
import s from "./DialogItem.module.css";
import {NavLink} from "react-router-dom";
import ava_astronaut from "../../../img/astronaut_dialogs.png"

type DialogItemType = {
    id: number
    name: string

}

type DialogItemPropsType = {
    dialogItem: Array<DialogItemType>
}
export function DialogItem(props: DialogItemPropsType) {

    const dialogItemMap = props.dialogItem.map( (el) => {
        return (
            <div>
                <img src={ava_astronaut} alt=""/>
                <NavLink activeClassName={s.active} to={`/dialogs ${el.id}`}>{el.name}</NavLink>
            </div>
        )
    })
    // let path = "/dialogs"
    return (
        <div className={s.dialogs_items}>

            <div className={`${s.dialog} ${s.active}`}>
                {dialogItemMap}

            </div>

        </div>
    )
}