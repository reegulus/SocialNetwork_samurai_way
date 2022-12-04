import React from "react";
import s from "./Dialogs.module.css"
import {Message} from "./message/Message";
import {Dialog} from "./dialog/Dialog";
import {DialogsPageType} from "../../redux/state";


type DialogsType = {
    dialogsPage: DialogsPageType
}
export function  Dialogs(props: DialogsType) {

    return (
        <div className={s.dialogs}>
            <div className={s.dialogs_items}>
                <Dialog dialog={props.dialogsPage.dialogs}/>
            </div>
            <div className={s.messages_items}>
                <Message message={props.dialogsPage.messages}/>
            </div>
        </div>
    )
}