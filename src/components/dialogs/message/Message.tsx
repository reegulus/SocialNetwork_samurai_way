import React from "react";
import s from "./Message.module.css";

export type MessageDataPropsType = {
    message: string
    id: number
}
type MessagePropsType = {
    message: Array<MessageDataPropsType>
}

export function Message(props: MessagePropsType) {
    const messageMap = props.message.map(el => <div key={el.id} className={`${s.message} ${s.active}`}>{el.message}</div>)

    const newMessageElements = React.createRef<HTMLTextAreaElement>()
    const addMessage = () => {
        const text = newMessageElements.current?.value
        alert(text)
    }
    return (
        <div className={s.messages_items}>
            <div>
                <textarea ref={newMessageElements} placeholder={'message'}></textarea>
                <button onClick={addMessage} >add message</button>
                {messageMap}
            </div>
        </div>
    )
}