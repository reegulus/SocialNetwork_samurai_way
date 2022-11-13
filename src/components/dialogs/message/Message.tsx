import React from "react";
import s from "./Message.module.css";

type MessagePropsType = {
    message: string
}

export function Message(props: MessagePropsType) {
    return (
        <div className={s.messages_items}>
            <div className={`${s.message} $${s.active}`}>{props.message}</div>
        </div>
    )
}