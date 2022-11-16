import React from "react";
import s from "./Message.module.css";

export type MessageDataPropsType = {
    message: string
}
type MessagePropsType = {
    message: Array<MessageDataPropsType>
}

export function Message(props: MessagePropsType) {
    return (
        <div className={s.messages_items}>

            <div>
                {props.message.map((el) => {
                    return (
                        <div>
                            <div className={`${s.message} $${s.active}`}>{el.message}</div>
                        </div>
                    )
                })}
            </div>
        </div>
    )
}