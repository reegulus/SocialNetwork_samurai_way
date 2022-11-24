import React from "react";
import s from "./Dialogs.module.css"
import {Message} from "./message/Message";
import {DialogItem} from "./dialogItem/DialogItem";


export function Dialogs() {

    const dialogData = [
        {id: 1, name: "Peter Quill",},
        {id: 2, name: "Gamora"},
        {id: 3, name: "Groot"},
        {id: 4, name: "Drax Destroyer"},
        {id: 5, name: "Raccoon Rocket"}
    ]
    const messageData = [
        {message: "It's generally a masterpiece of abstract art!" },
        {message: "Yes, Quil. On the ship is a pigsty."},
        {message: "I am Groot!"},
        {message: "I'm going to drink"},
        {message: "So, who is here for the first time in space?"}
    ]
    return (
        <div className={s.dialogs}>
            <div className={s.dialogs_items}>
                <DialogItem dialogItem={dialogData}/>
            </div>
            <div className={s.messages_items}>
                <Message message={messageData}/>
            </div>
        </div>
    )
}