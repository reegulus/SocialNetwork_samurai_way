import React from "react";
import s from "./Dialogs.module.css"
import {Message} from "./message/Message";
import {Dialog} from "./dialog/Dialog";
import {ActionsTypes, DialogsPageType} from "../../redux/state";


type DialogsType = {
    state: DialogsPageType
    // dispatch: (action: ActionsTypes) => void
    // dialogsPage: DialogsPageType
}
export function  Dialogs(props: DialogsType) {

    return (
        <div className={s.dialogs}>
            <div className={s.dialogs_items}>
                <Dialog
                    dialog={props.state.dialogs}
                />
            </div>
            <div className={s.messages_items}>
                <Message
                    message={props.state.messages}
                />
            </div>
        </div>
    )
}