import React from "react";
import s from "./Dialog.module.css";
import {NavLink} from "react-router-dom";
import ava_astronaut from "../../../img/astronaut_dialogs.png"
import {ActionsTypes, DialogType} from "../../../redux/state";

/*type DialogType = {
    id: number
    name: string
}*/
type DialogPropsType = {
    dialog: Array<DialogType>
}

export function Dialog(props: DialogPropsType) {
    let path = "/dialogs"
    const dialogMap = props.dialog.map((el) => {
        return (
            <div key={el.id}>
                <img src={ava_astronaut} alt=""/>
                <NavLink activeClassName={s.active} to={`${path} ${el.id}`}>{el.name}</NavLink>
            </div>
        )
    })
    return (
        <div className={s.dialogs_items}>
            <div className={`${s.dialog} ${s.active}`}>

                {dialogMap}
            </div>
        </div>
    )
}