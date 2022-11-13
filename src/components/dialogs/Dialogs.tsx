import React from "react";
import s from "./Dialogs.module.css"

export function Dialogs() {
    return (
        <div className={s.dialogs}>
            <div className={s.dialogs_items}>
                <div className={s.dialog}>Peter Quill</div>
                <div className={s.dialog + ' ' + s.active}>Gamora</div>
                <div className={s.dialog}>Groot</div>
                <div className={s.dialog}>Drax Destroyer</div>
                <div className={s.dialog}>Raccoon Rocket</div>
            </div>
            <div className={s.messages_items}>
                <div className={s.message}>
                    - It's still flowers! In the ultraviolet, there is generally a masterpiece of abstract art!
                </div>
                <div className={s.message + ' ' + s.active}>- Yes, Quil. On the ship is a pigsty.
                </div>
                <div className={s.message}> - I am Groot!
                </div>
                <div className={s.message}> - I'm going to drink
                </div>
                <div className={s.message}> - So, who is here for the first time in space?
                </div>
            </div>
        </div>
    )
}