import React from "react";
import s from "./Message.module.css";

export type MessageDataPropsType = {
    message: string
}
type MessagePropsType = {
    message: Array<MessageDataPropsType>
}

export function Message(props: MessagePropsType) {
    const messageMap = props.message.map(el => <div className={`${s.message} $${s.active}`}>{el.message}</div>)
    return (
        <div className={s.messages_items}>

            <div>
                {messageMap}
            </div>
        </div>
    )
}