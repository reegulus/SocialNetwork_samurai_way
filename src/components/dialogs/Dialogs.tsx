import React from "react";
import s from "./Dialogs.module.css"
import {Message} from "./message/Message";
import {Dialog} from "./dialog/Dialog";

export function Dialogs() {
    return (
        <div className={s.dialogs}>
            <Dialog/>
            <Message/>
        </div>
    )
}