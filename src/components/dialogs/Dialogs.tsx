import React from "react";
import s from "./Dialogs.module.css"
import {Message} from "./message/Message";
import {DialogItem} from "./dialog/DialogItem";

export function Dialogs() {
    return (
        <div className={s.dialogs}>
            <div className={s.dialogs_items}>
                <DialogItem id={1} name={"Peter Quill"}/>
                <DialogItem id={2} name={"Gamora"}/>
                <DialogItem id={3} name={"Groot"}/>
                <DialogItem id={4} name={"Drax Destroyer"}/>
                <DialogItem id={5} name={"Raccoon Rocket"}/>
            </div>
            <div className={s.messages_items}>
                <Message
                    message={"- It's still flowers! In the ultraviolet, there is generally a masterpiece of abstract art!"}/>
                <Message message={"- Yes, Quil. On the ship is a pigsty."}/>
                <Message message={"- I am Groot!"}/>
                <Message message={"- I'm going to drink"}/>
                <Message message={"- So, who is here for the first time in space?"}/>
            </div>
        </div>
    )
}