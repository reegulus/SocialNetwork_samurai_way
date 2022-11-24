import React from "react";
import s from "./ProfileInfo.module.css"
import samurai from "./samurai-1032044.png"

export function ProfileInfo() {
    return (
        <div>
            <div className={s.profile_info}>

                <img
                    src={samurai}
                    alt=""/>
            </div>
            <div className={s.avatDes}>
                Ava + description
            </div>
        </div>
    )
}